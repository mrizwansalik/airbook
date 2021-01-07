import Header from "../components/Header";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import Link from "next/link";
import Router, { withRouter } from "next/router";
import { post } from "../helpers/api";
import msg from "../helpers/notifications";
import cookies from 'next-cookies';
import * as site from "../redux/actions/siteActions";
import axios from "axios";

export async function getServerSideProps(ctx) {

  let data = [], headers = {
      'Content-Type': 'application/json'
   };
  let {authToken} = cookies(ctx)

  if(authToken !== undefined && authToken !== null)
    headers['Authorization'] = `Token ${authToken.replace(/['"]+/g, '')}`

    if(ctx.query.search !== 'undefined' && ctx.query.search !== undefined)
    search = ctx.query.search

  return {
    props: { data, query:ctx.query}
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      topAdvert:{},
      aircrafts : '',
      engines : '',
      apus : '',
      wanteds : '',
    }
    this.props.search({type:'home', value:[], detail:true});
    this.props.searching(false);
  }
  componentDidUpdate() {
    
    this.props.search({type:'home', value:[], detail:true});
  }
  getData(){
    let data=[
      {api:'advertisements', params:{section:'page-top'}, key:'topAdvert'},
      {api:'advertisements', params:{section:'page-bottom'}, key:'bottomAdvert'},
    ]
    getData(this, data);
  }



  render() {
    let {topAdvert}=this.state
    let p = 1;
    return (
      <>
        <Header />
        <div>
        <div className="ab-home-advert">
          <div className="ab-home-hero-container w-container">
            <h2 className="ab-home-hero-h2">Get more leads</h2>
            <p className="ab-home-hero-p">Promote your aircraft &amp; engines on Airbook</p>
          </div>
        </div>
        <div className="home-h1-section">
          <div className="ab-container w-container">
            <h1 className="ab-home-h1">On Airbook you can quickly market your aircraft, engines, APU and parts for sale, lease, charter &amp; ACMI. It's free!</h1>
          </div>
        </div>
        <div className="home-listing-section">
          <div className="ab-container w-container">
          {(topAdvert && topAdvert.media != null) ? <a href="#" target="_blank" className="ab-top-page-advert w-inline-block" style={{ backgroundImage: 'url(/static/images/' + topAdvert.media.original_file_name + ')' }}></a>
               : ""}
            <div className="home-latest-flex-wrapper">
              <div className="home-latest-listings offered">
                <div className="listing-headline-div">
                  <h2 className="home-listing-headline">Latest Offered Assets</h2>
                </div>
                <div className="home-listing-block">
                  <div className="home-latest-link-composite">
                    <a href="#" className="latest-link-span">CFM56 3C1</a> for <span className="latest-type-span">Sale</span>
                  </div>
                  <div className="home-latest-link-composite">
                    <a href="#" className="latest-link-span">2009 Boeing 737 300</a> for <span className="latest-type-span">ACMI</span>
                  </div>
                  <div className="home-latest-link-composite">
                    <a href="#" className="latest-link-span">CFM56 3C1</a> for <span className="latest-type-span">Sale</span>
                  </div>
                  <div className="home-latest-link-composite">
                    <a href="#" className="latest-link-span">2009 Boeing 737 300</a> for <span className="latest-type-span">Lease Purchase</span>
                  </div>
                  <div className="home-latest-link-composite">
                    <a href="#" className="latest-link-span">2009 Boeing 737 300</a> for <span className="latest-type-span">ACMI</span>
                  </div>
                  <div className="home-latest-link-composite">
                    <a href="#" className="latest-link-span">2009 Boeing 737 300</a> for <span className="latest-type-span">ACMI</span>
                  </div>
                  <div className="home-latest-link-composite">
                    <a href="#" className="latest-link-span">2009 Boeing 737 300</a> for <span className="latest-type-span">Lease Purchase</span>
                  </div>
                </div>
                <div className="latest-btn-block">
                  <a href="#" className="home-view-all-btn w-button">aircraft</a>
                  <a href="#" className="home-view-all-btn w-button">engines</a>
                  <a href="#" className="home-view-all-btn w-button">APU's</a>
                </div>
              </div>
              <div className="home-latest-listings">
                <div className="listing-headline-div wanted">
                  <h2 className="home-listing-headline">Latest Wanted Assets</h2>
                </div>
                <div className="home-listing-block">
                  <div className="home-latest-link-composite">
                    <a href="#" className="latest-link-span">2009 Boeing 737 300</a> for <span className="latest-type-span">ACMI</span>
                  </div>
                  <div className="home-latest-link-composite">
                    <a href="#" className="latest-link-span">CFM56 3C1</a> for <span className="latest-type-span">Sale</span>
                  </div>
                  <div className="home-latest-link-composite">
                    <a href="#" className="latest-link-span">2009 Boeing 737 300</a> for <span className="latest-type-span">Lease Purchase</span>
                  </div>
                  <div className="home-latest-link-composite">
                    <a href="#" className="latest-link-span">2009 Boeing 737 300</a> for <span className="latest-type-span">ACMI</span>
                  </div>
                  <div className="home-latest-link-composite">
                    <a href="#" className="latest-link-span">2009 Boeing 737 300</a> for <span className="latest-type-span">ACMI</span>
                  </div>
                  <div className="home-latest-link-composite">
                    <a href="#" className="latest-link-span">2009 Boeing 737 300</a> for <span className="latest-type-span">Lease Purchase</span>
                  </div>
                  <div className="home-latest-link-composite">
                    <a href="#" className="latest-link-span">CFM56 3C1</a> for <span className="latest-type-span">Sale</span>
                  </div>
                </div>
                <div className="latest-btn-block">
                <Link href="/wanted/p/[list]" as={`/wanted/p/${p}`}><a className="home-view-all-btn w-button">view all wanted listings</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-wanted-section">
          <div className="ab-container w-container">
            <div className="listing-headline-div">
              <h2 className="home-listing-headline">Browse by Manufacturers</h2>
            </div>
            <div className="home-cat-flex-block">
              <div className="home-asset-cat">
                <h3 className="home-cat-manf-title">Aircraft&nbsp; <Link href="/aircraft/p/[list]" as={`/aircraft/p/${p}`}><a className="link-2">View all</a></Link>
                </h3>
                <div className="home-cat-link-flex">
                  <a href="#" className="home-asset-cat-link">Boeing</a>
                  <a href="#" className="home-asset-cat-link">Airbus</a>
                  <a href="#" className="home-asset-cat-link">Beechcraft</a>
                  <a href="#" className="home-asset-cat-link">Antanov</a>
                  <a href="#" className="home-asset-cat-link">ATR&nbsp;Aircraft</a>
                  <a href="#" className="home-asset-cat-link">ATR&nbsp;Aircraft</a>
                </div>
              </div>
              <div className="home-asset-cat eng">
                <h3 className="home-cat-manf-title">Engines <Link href="/engine/p/[list]" as={`/engine/p/${p}`}><a className="link-2">View all</a></Link>
                </h3>
                <div className="home-cat-link-flex">
                  <a href="#" className="home-asset-cat-link">CFM International</a>
                  <a href="#" className="home-asset-cat-link">Pratt &amp; Whitney</a>
                  <a href="#" className="home-asset-cat-link">IAEA</a>
                  <a href="#" className="home-asset-cat-link">IAEA</a>
                  <a href="#" className="home-asset-cat-link">IAEA</a>
                  <a href="#" className="home-asset-cat-link">IAEA</a>
                </div>
              </div>
              <div className="home-asset-cat apu">
                <h3 className="home-cat-manf-title">APU <Link href="/apu/p/[list]" as={`/apu/p/${p}`}><a className="link-2">View all</a></Link>
                </h3>
                <div className="home-cat-link-flex">
                  <a href="#" className="home-asset-cat-link">Boeing</a>
                  <a href="#" className="home-asset-cat-link">Airbus</a>
                  <a href="#" className="home-asset-cat-link">Beechcraft</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer />
      </>
    );
  }
}

export default connect(null,site.actions)(withRouter(App));
