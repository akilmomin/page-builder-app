import * as React from 'react';
import {
  NavLink,
  HashRouter
} from "react-router-dom";
// import { Config } from '../../classes/config';

import {
  Spinner,
  SpinnerSize
} from 'office-ui-fabric-react/lib/Spinner';
const tempNews = [
  { id: 1, title: 'Test', category: 'test', language: 'english', start: '20/12/2021', url: '/#', banner: "test" },
  { id: 1, title: 'Test', category: 'test', language: 'english', start: '20/12/2021', url: '/#', banner: "test" },
  { id: 1, title: 'Test', category: 'test', language: 'english', start: '20/12/2021', url: '/#', banner: "test" },
  { id: 1, title: 'Test', category: 'test', language: 'english', start: '20/12/2021', url: '/#', banner: "test" },
  { id: 1, title: 'Test', category: 'test', language: 'english', start: '20/12/2021', url: '/#', banner: "test" },
  { id: 1, title: 'Test', category: 'test', language: 'english', start: '20/12/2021', url: '/#', banner: "test" },
  { id: 1, title: 'Test', category: 'test', language: 'english', start: '20/12/2021', url: '/#', banner: "test" },
  { id: 1, title: 'Test', category: 'test', language: 'english', start: '20/12/2021', url: '/#', banner: "test" },
  { id: 1, title: 'Test', category: 'test', language: 'english', start: '20/12/2021', url: '/#', banner: "test" },
  { id: 1, title: 'Test', category: 'test', language: 'english', start: '20/12/2021', url: '/#', banner: "test" },
  { id: 1, title: 'Test', category: 'test', language: 'english', start: '20/12/2021', url: '/#', banner: "test" },
  { id: 1, title: 'Test', category: 'test', language: 'english', start: '20/12/2021', url: '/#', banner: "test" },
  { id: 1, title: 'Test', category: 'test', language: 'english', start: '20/12/2021', url: '/#', banner: "test" },
  { id: 1, title: 'Test', category: 'test', language: 'english', start: '20/12/2021', url: '/#', banner: "test" },
  { id: 1, title: 'Test', category: 'test', language: 'english', start: '20/12/2021', url: '/#', banner: "test" },
  { id: 1, title: 'Test', category: 'test', language: 'english', start: '20/12/2021', url: '/#', banner: "test" },
  { id: 1, title: 'Test', category: 'test', language: 'english', start: '20/12/2021', url: '/#', banner: "test" },
];
export default class Event extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      newsItems: tempNews
    };
  }
  public opennews = ((news: any): void => {
    // console.log(news);
    if(this.props.editMode){
        return;
      }
    let opennews = news.url + this.props.sitePageName + "?category=Webinar_" + news.id;
    window.open(opennews, '_self');
  });

  public render(): React.ReactElement<any> {
    const {
      newsItems
    } = this.state;
   
    return (
      <div className='card'>
        <div className="ms-Grid content" dir="ltr">
          <div className="ms-Grid-row mb-10">

            <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg10 ">
              <span className={"newsHeading"}>Events</span>

            </div>
            <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg2 ">
              <span className={"floatRight"}>
                <a className={"link"} href={this.props.seeAll + "?category=News"}> See all</a></span>
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 ">
              {!this.state.loading ?
                <>
                  {newsItems && newsItems.length > 0 ?
                    <div className="ms-Grid-row">
                      {newsItems.map((news: any, index: number) => {
                        return (
                          <>
                            {/* {this.props.isNarrow? */}
                            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 " onClick={() => this.opennews(news)}>
                              <div className={"NewsDiv"}>
                                <div className={"flexDiv"}>
                                  <div className={"flexItemImgNarrow"}>
                                    <img className={"NewsImageNarrow"} src={news.banner && news.banner} />
                                  </div>
                                  <div className={"flexItemContentNarrow"}>
                                    <div className={"NewsDetails"}>
                                      {/* <div className={"NewsCategory"}>
                                      <div className={"NewsCategoryDiv"}>
                                        <span className={"NewsCategoryText"}>{news.category.toUpperCase()}</span>
                                      </div>
                                    </div> */}
                                      <div className={"NewsTitleNarrow"} >{news.title}</div>
                                      <div className={"NewsLanguageNarrow"}>{news.language}</div>
                                      <div className={"NewsDateNarrow"}>{news.start}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* : */}
                            {/* <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6 " onClick={() => this.opennews(news)}>
                            <div className={"NewsDiv"}>
                              <div className={"flexDiv"}>
                                <div className={"flexItemImg"}>
                                  <img className={"NewsImage"} src={news.banner && news.banner} />
                                </div>
                                <div className={"flexItemContent"}>
                                  <div className={"NewsDetails"}>
                                    <div className={"NewsCategory"}>
                                      <div className={"NewsCategoryDiv"}>
                                        <span className={"NewsCategoryText"}>{news.category.toUpperCase()}</span>
                                      </div>
                                    </div>
                                    <div className={"NewsTitle"} >{news.title}</div>
                                    <div className={"NewsLanguage"}>{news.language}</div>
                                    <div className={"NewsDate"}>{news.start}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                            {/* } */}
                          </>
                        );
                      })}
                    </div> :
                    <div className={"NoDataDiv"}>
                      {!this.state.loading &&
                        (<p className={"NoDataMessage"}>There are no News available</p>)}
                    </div>
                  }
                </> :
                <Spinner size={SpinnerSize.large} />
              }
            </div>
          </div>
        </div>
      </div>

    );
  }
}
