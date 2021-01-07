import React, { Component } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import cookies from 'next-cookies'
import {list} from '../../helpers/api';
import {randomizeOrdering} from '../../helpers/functions';
import axios from 'axios'

export async function getServerSideProps(ctx) {

  let data = [], headers = {
      'Content-Type': 'application/json'
   }, search = '';
  let {authToken} = cookies(ctx)

  if(authToken !== undefined && authToken !== null)
    headers['Authorization'] = `Token ${authToken.replace(/['"]+/g, '')}`

  if(ctx.query.search !== 'undefined' && ctx.query.search !== undefined)
    search = ctx.query.search

    if (ctx.query.list === 1 || ctx.query.list === '1') // only for page 1
    await randomizeOrdering('AbCms');

    await axios.get(process.env.NEXT_PUBLIC_API_URL + `api/cms`, {
      headers:headers,
      params: {
        page: ctx.query.list,
        frontend: true,
        url: "policy"
      }
    }
    ).then((response) => {
      data = response.data.results.find(da=>da.url ==="policy");
    });
  return {
    props: { data, query:ctx.query}
  };
}

export default class support extends Component {
  constructor(props) {
    super(props);
    let response = this.props
    this.state ={
      policy : response.data,
      topAdvert:{},
    }
  }

  getTerm(url){
    list(url).then((response)=>{
      let policy = response.data
      let previous= response.extra_data.previous;
      let next= response.extra_data.next;
      this.setState({policy, previous, next})
    })
  }
  getData(){
    let data=[
      {api:'advertisements', params:{section:'page-top'}, key:'topAdvert'},
      {api:'advertisements', params:{section:'page-bottom'}, key:'bottomAdvert'},
    ]
    getData(this, data);
  }
  render() {
    let {topAdvert, policy} = this.state
    return (
      <div>
        <Header />
        <div className="ab-page-content">
          <div className="ab-container w-container">
          {(topAdvert && topAdvert.media != null) ? <a href="#" target="_blank" className="ab-top-page-advert w-inline-block" style={{ backgroundImage: 'url(/static/images/' + topAdvert.media.original_file_name + ')' }}></a>
               : ""}
            <div className="general-contents">
              <h1 className="general-page-heading">Privacy Policy</h1>
              <div className="terms w-richtext" dangerouslySetInnerHTML={{__html: policy.body }}>
                {/* {policy.body} */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
