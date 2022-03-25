import * as React from 'react';
import {
  NavLink,
  HashRouter
} from "react-router-dom";
// import { Config } from '../../classes/config';

import Banner from "./Banner";
import TilesQuickLink from "./TilesQuickLink";
import News from "./News";
import BusinessPaper from "./BusinessPaperList";
import Event from "./EventList";

const styles: React.CSSProperties = {
  fontSize: 24,
  textAlign: "center",
  margin: "auto",
  userSelect: "none",
};

const tiles = [
  { item: <Banner /> },
  { item: <span style={styles}>2</span> },
  { item: <TilesQuickLink /> },
  { item: <News /> },
  // { item: <span style={styles}>4</span> },
  { item: <span style={styles}>5</span> },
  { item: <span style={styles}>6</span> },
];
const json = [
  {
     "Children":[
        {
           "Type":"SubSection",
           "IsGrid":true,
           "GridValue":12,
           "UniqueId":"KLKGRN",
           "Children":[
              {
                 "Children":[
                    {
                       "Type":"SubSection",
                       "IsGrid":true,
                       "GridValue":8,
                       "UniqueId":"Jd6sSS",
                       "Children":[
                          {
                             "Children":[
                                {
                                   "Type":"SubSection",
                                   "IsGrid":true,
                                   "GridValue":12,
                                   "UniqueId":"RvVzh5",
                                   "Children":[
                                      {
                                         "Type":"Component",
                                         "ComponentName":"Banner",
                                         "UniqueId":"MG99ER"
                                      }
                                   ]
                                }
                             ],
                             "GridValue":"12",
                             "IsGrid":true,
                             "Type":"Section",
                             "UniqueId":"m25u8M"
                          },
                          {
                             "Children":[
                                {
                                   "Type":"SubSection",
                                   "IsGrid":true,
                                   "GridValue":12,
                                   "UniqueId":"SXAk0v",
                                   "Children":[
                                      {
                                         "Type":"Component",
                                         "ComponentName":"TilesQuickLink",
                                         "UniqueId":"FpvqNQ"
                                      }
                                   ]
                                }
                             ],
                             "GridValue":"12",
                             "IsGrid":true,
                             "Type":"Section",
                             "UniqueId":"wlhq4Y"
                          },
                          {
                             "Children":[
                                {
                                   "Type":"SubSection",
                                   "IsGrid":true,
                                   "GridValue":6,
                                   "UniqueId":"aXaToM",
                                   "Children":[
                                      {
                                         "Type":"Component",
                                         "ComponentName":"BusinessPaper",
                                         "UniqueId":"GTluMY"
                                      }
                                   ]
                                },
                                {
                                   "Type":"SubSection",
                                   "IsGrid":true,
                                   "GridValue":6,
                                   "UniqueId":"NVW2GW",
                                   "Children":[
                                      {
                                         "Type":"Component",
                                         "ComponentName":"News",
                                         "UniqueId":"om16Xd"
                                      }
                                   ]
                                }
                             ],
                             "GridValue":"12",
                             "IsGrid":true,
                             "Type":"Section",
                             "UniqueId":"lJ1Who"
                          }
                       ]
                    },
                    {
                       "Type":"SubSection",
                       "IsGrid":true,
                       "GridValue":4,
                       "UniqueId":"10PeU1",
                       "Children":[
                          {
                             "Children":[
                                {
                                   "Type":"SubSection",
                                   "IsGrid":true,
                                   "GridValue":12,
                                   "UniqueId":"M0tRMp",
                                   "Children":[
                                      {
                                         "Type":"Component",
                                         "ComponentName":"Event",
                                         "UniqueId":"TIjC6D"
                                      }
                                   ]
                                }
                             ],
                             "GridValue":"12",
                             "IsGrid":true,
                             "Type":"Section",
                             "UniqueId":"OwAQag"
                          }
                       ]
                    }
                 ],
                 "GridValue":"12",
                 "IsGrid":true,
                 "Type":"Section",
                 "UniqueId":"LTun18"
              }
           ]
        }
     ],
     "GridValue":"12",
     "IsGrid":true,
     "Type":"Section",
     "UniqueId":"TXSzKj"
  }
];
export default class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      componentItems: json,
      anchorAlign: {
        horizontal: "center",
        vertical: "bottom",
      },
      popupAlign: {
        horizontal: "center",
        vertical: "bottom",
      },
      showPopUP: false,
      showSection: true,
      IsEditMode: true
    };
  }

  public returnComponent(item:any, i:any, parent?:any) {
    if (item.Type == 'Component') {
      return (
        <div>
          {this.returnSubComponent(item, i, parent)}
        </div>
      );
    }
    if (item.Type == 'Section') {
      return (
        <div>
          {this.returnSectionGrid(item, i, parent)}

          {this.state.IsEditMode && this.state.showSectionID == item.UniqueId ?
            <>
              <div className="alignCenter displayFlex dragDropLineArea" onClick={() => this.addSectionClick(i, item)}>
                <div style={{ width: '48%' }}><hr className="dragDropLine" /></div>
                <div style={{ width: '4%' }}><i className="ms-Icon ms-Icon--Add" aria-hidden="true"></i></div>
                <div style={{ width: '48%' }}><hr className="dragDropLine" /></div>
              </div>
              {(this.state.showPopUP && item.UniqueId == this.state.popUpuniqueId) && this.returnPopUp(item, i, parent)}
              
            </> :
            null}
        </div>
      );
    }
    if (item.Type == 'SubSection') {
      return (this.returnSubSectionGrid(item, i));
    }
  }
  public returnSubComponent(item:any, i:any, parent?:any) {

    if (item.ComponentName == 'Banner') {
      return (
        <div onClick={() => this.showComponentEditOption(item)} >
          {this.state.showComponentEditOption && this.state.componetSectionID == item.UniqueId ?
            <div className="componentEditBtn">
              <i className="ms-Icon ms-Icon--Copy tilesQLFuncBtn" aria-hidden="true" onClick={() => this.cloneComponent(item, i, parent)}></i>
              <i className="ms-Icon ms-Icon--Delete tilesQLFuncBtn" aria-hidden="true" onClick={() => this.deleteComponent(item, i, parent)}></i>
            </div>
            : null}
          <Banner
            editMode={this.state.IsEditMode} />
        </div>
      );
    }
    else if (item.ComponentName == 'News') {
      return (
        <div onClick={() => this.showComponentEditOption(item)} >
          {this.state.showComponentEditOption && this.state.componetSectionID == item.UniqueId ?
            <div className="componentEditBtn">
              <i className="ms-Icon ms-Icon--Copy tilesQLFuncBtn" aria-hidden="true" onClick={() => this.cloneComponent(item, i, parent)}></i>
              <i className="ms-Icon ms-Icon--Delete tilesQLFuncBtn" aria-hidden="true" onClick={() => this.deleteComponent(item, i, parent)}></i>
            </div>
            : null}
          <News
            editMode={this.state.IsEditMode} />
        </div>
      );
    }
    else if (item.ComponentName == 'TilesQuickLink') {
      return (
        <div onClick={() => this.showComponentEditOption(item)} >
          {this.state.showComponentEditOption && this.state.componetSectionID == item.UniqueId ?
            <div className="componentEditBtn">
              <i className="ms-Icon ms-Icon--Copy tilesQLFuncBtn" aria-hidden="true" onClick={() => this.cloneComponent(item, i, parent)}></i>
              <i className="ms-Icon ms-Icon--Delete tilesQLFuncBtn" aria-hidden="true" onClick={() => this.deleteComponent(item, i, parent)}></i>
            </div>
            : null}
          <TilesQuickLink />
        </div>);
    }
    else if (item.ComponentName == 'Event') {
      return (
        <div onClick={() => this.showComponentEditOption(item)} >
          {this.state.showComponentEditOption && this.state.componetSectionID == item.UniqueId ?
            <div className="componentEditBtn">
              <i className="ms-Icon ms-Icon--Copy tilesQLFuncBtn" aria-hidden="true" onClick={() => this.cloneComponent(item, i, parent)}></i>
              <i className="ms-Icon ms-Icon--Delete tilesQLFuncBtn" aria-hidden="true" onClick={() => this.deleteComponent(item, i, parent)}></i>
            </div>
            : null}
          <Event editMode={this.state.IsEditMode} />
        </div>);
    }
    else if (item.ComponentName == 'BusinessPaper') {
      return (
        <div onClick={() => this.showComponentEditOption(item)} >
          {this.state.showComponentEditOption && this.state.componetSectionID == item.UniqueId ?
            <div className="componentEditBtn">
              <i className="ms-Icon ms-Icon--Copy tilesQLFuncBtn" aria-hidden="true" onClick={() => this.cloneComponent(item, i, parent)}></i>
              <i className="ms-Icon ms-Icon--Delete tilesQLFuncBtn" aria-hidden="true" onClick={() => this.deleteComponent(item, i, parent)}></i>
            </div>
            : null}
          <BusinessPaper editMode={this.state.IsEditMode} />
        </div>);
    }
  }
  public returnSectionGrid(item:any, i:any, parent?:any) {
    return (
      <div className="ms-Grid m-10" dir="ltr">
        <div className="ms-Grid-row zeroTop">
          <>
            {this.state.showSectionEditBtn && this.state.showSectionID == item.UniqueId ?
              <div className="sectionEditBtn">
                <i className="ms-Icon ms-Icon--Copy tilesQLFuncBtn" aria-hidden="true" onClick={() => this.cloneComponent(item, i, parent)}></i>
                <i className="ms-Icon ms-Icon--Delete tilesQLFuncBtn" aria-hidden="true" onClick={() => this.deleteComponent(item, i, parent)}></i>
                <i className="ms-Icon ms-Icon--Edit tilesQLFuncBtn" aria-hidden="true" onClick={() => this.deleteComponent(item, i, parent)}></i>
              </div>
              : null}
          </>
          {item.IsGrid && (
            <div className={`ms-Grid-col ms-sm12 ms-md12 ms-lg${item.GridValue} ${this.state.showSectionEditBtn && this.state.IsEditMode && this.state.showSectionID == item.UniqueId ? "showBorder" : ""}  `} onMouseEnter={() => this.onMouseEnterSection(item)} onMouseLeave={() => this.onMouseLeaveSection(item)}>
              <div>
                {item.Children && item.Children.map((childItem: any, childI: any) => {
                  return (this.returnComponent(childItem, childI));
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  public returnSubSectionGrid(item:any, i:any) {
    return (
      <div>
        {item.IsGrid && (
          <div className={`ms-Grid-col ms-sm12 ms-md12 ms-lg${item.GridValue} ${this.state.IsEditMode ? 'showBorderDotted' : ''}`}>
            {item.Children && item.Children.length > 0 ?
              <div>
                {item.Children && item.Children.map((childItem: any, childI: any) => {
                  return (this.returnComponent(childItem, childI, item));
                })}
              </div> :
              <div>
                {this.returnSelectionMenu(item, i)}
              </div>
            }
          </div>
        )}
      </div>
    );
  }
  public renderComponentItems() {
    if (this.state.componentItems && this.state.componentItems.length > 0) {
      return (<div>
        {this.state.componentItems.map((item: any, i: any) => {
          return (this.returnComponent(item, i, ""));
        })}
      </div>);
    }
  }
  public returnSelectionMenu(item:any, i:any) {
    return (
      <div className=''>
        <div className="segmentView">
          <div className={this.state.showSection ? "segmentItemSelected" : "segmentItem"} onClick={() => this.setState({ showSection: true })}>Section</div>
          <div className={!this.state.showSection ? "segmentItemSelected" : "segmentItem"} onClick={() => this.setState({ showSection: false })}>Component</div>
        </div>
        {this.state.showSection ?
          <div className="popUpDiv">
            <div className="popUpIconDiv" onClick={() => this.onSelectComponent(item, i, "section", [12])}><i className="ms-Icon ms-Icon--SingleColumn popUpIcon" aria-hidden="true"></i></div>
            <div className="popUpIconDiv" onClick={() => this.onSelectComponent(item, i, "section", [6, 6])}><i className="ms-Icon ms-Icon--DoubleColumn popUpIcon" aria-hidden="true"></i></div>
            <div className="popUpIconDiv" onClick={() => this.onSelectComponent(item, i, "section", [4, 4, 4])}><i className="ms-Icon ms-Icon--TripleColumn popUpIcon" aria-hidden="true"></i></div>
            <div className="popUpIconDiv" onClick={() => this.onSelectComponent(item, i, "section", [8, 4])}><i className="ms-Icon ms-Icon--ColumnLeftTwoThirds popUpIcon" aria-hidden="true"></i></div>
            <div className="popUpIconDiv" onClick={() => this.onSelectComponent(item, i, "section", [4, 8])}><i className="ms-Icon ms-Icon--ColumnRightTwoThirds popUpIcon" aria-hidden="true"></i></div>
          </div>
          :
          <div className="popUpDiv">
            <div className="popUpIconDiv" onClick={() => this.onSelectComponent(item, i, "component", "Banner")}>Banner</div>
            <div className="popUpIconDiv" onClick={() => this.onSelectComponent(item, i, "component", "News")}>News</div>
            <div className="popUpIconDiv" onClick={() => this.onSelectComponent(item, i, "component", "BusinessPaper")}>Business Paper</div>
            <div className="popUpIconDiv" onClick={() => this.onSelectComponent(item, i, "component", "Event")}>Event</div>
            <div className="popUpIconDiv" onClick={() => this.onSelectComponent(item, i, "component", "TilesQuickLink")}>Tiles</div>
          </div>
        }
      </div>
    );
  }
  public returnPopUp(item?:any, i?:any, parent?:any) {
    return (
      <div className="popUpContainer">
      <div className='popUp'>
        <p className="alignCenter">Select a section</p>
        <div className="popUpDiv">
          <div className="popUpIconDiv" onClick={() => this.onSelectComponent(item, i, "section", [12], parent)}><i className="ms-Icon ms-Icon--SingleColumn popUpIcon" aria-hidden="true"></i></div>
          <div className="popUpIconDiv" onClick={() => this.onSelectComponent(item, i, "section", [6, 6], parent)}><i className="ms-Icon ms-Icon--DoubleColumn popUpIcon" aria-hidden="true"></i></div>
          <div className="popUpIconDiv" onClick={() => this.onSelectComponent(item, i, "section", [4, 4, 4], parent)}><i className="ms-Icon ms-Icon--TripleColumn popUpIcon" aria-hidden="true"></i></div>
          <div className="popUpIconDiv" onClick={() => this.onSelectComponent(item, i, "section", [8, 4], parent)}><i className="ms-Icon ms-Icon--ColumnLeftTwoThirds popUpIcon" aria-hidden="true"></i></div>
          <div className="popUpIconDiv" onClick={() => this.onSelectComponent(item, i, "section", [4, 8], parent)}><i className="ms-Icon ms-Icon--ColumnRightTwoThirds popUpIcon" aria-hidden="true"></i></div>
        </div>
      </div>
      </div>
    );
  }
  public onSelectComponent(item:any, i:any, type:any, name:any, parent?:any) {
    // console.log({ i });
    // console.log({ type });
    // console.log({ name });
    // console.log({ item });
    // console.log({ parent });
    // console.log(this.generateUniqueId());
    let children:any = [];
    let tempItem;
    if (type == 'section' && item) {
      name.forEach((element:any) => {
        children.push({
          Type: "SubSection",
          IsGrid: true,
          GridValue: element,
          UniqueId: this.generateUniqueId(),
          Children: [
          ]
        });
      });
      tempItem = {
        Children: children,
        GridValue: "12",
        IsGrid: true,
        Type: "Section",
        UniqueId: this.generateUniqueId(),
      };
      if (parent) {
        parent.Children.splice(i + 1, 0, tempItem);
      } else {
        item.Children = [tempItem];
      }
    } else if (type == 'component') {
      children.push({
        Type: "Component",
        ComponentName: name,
        UniqueId: this.generateUniqueId(),
      });
      item.Children = children;
    } else {
      name.forEach((element:any) => {
        children.push({
          Type: "SubSection",
          IsGrid: true,
          GridValue: element,
          UniqueId: this.generateUniqueId(),
          Children: [
          ]
        });
      });
      tempItem = [{
        Children: children,
        GridValue: "12",
        IsGrid: true,
        Type: "Section",
        UniqueId: this.generateUniqueId(),
      }];
      this.setState({ componentItems: tempItem });
    }
    console.log(this.state.componentItems);
    // this.setState({componentItems:this.state.componentItems});
  }
  public deleteComponent(item:any, i:any, parent:any) {
  console.log({parent});
  console.log({item});
  console.log({i});
    let tempComponentItems = this.state.componentItems;
    if (parent) {
      parent.Children.splice(i, 1);
    } else {
      tempComponentItems.splice(i, 1);
    }
    this.setState({ componentItems: tempComponentItems });
  }
  public cloneComponent(item:any, i:any, parent:any) {
   
    item.UniqueId = this.generateUniqueId();
    let tempComponentItems = this.state.componentItems;
    if (parent) {
      parent.Children.splice(i+1, 0,item);
    } else {
      tempComponentItems.splice(i+1, 0,item);
    }
    this.setState({ componentItems: tempComponentItems });
  }
  public addSectionClick(i?: any, item?: any) {

    this.setState({
      popUpuniqueId: item.UniqueId,
      showPopUP: true
    });
  }
  public generateUniqueId() {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < 6; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }
  public handleSelect = (e:any) => {
    this.setState({ selectedPopUpMenu: e.selected });
  }
  public render(): React.ReactElement<any> {
console.log(JSON.stringify(this.state.componentItems));
    return (
      <div className="">
        {this.state.componentItems && this.state.componentItems.length > 0 ?
          this.renderComponentItems() :
          <>
            <div className="alignCenter displayFlex dragDropLineArea" onClick={() => this.addSectionClick()}>
              <div style={{ width: '48%' }}><hr className="dragDropLine" /></div>
              <div style={{ width: '4%' }}><i className="ms-Icon ms-Icon--Add" aria-hidden="true"></i></div>
              <div style={{ width: '48%' }}><hr className="dragDropLine" /></div>
            </div>
            {this.returnPopUp()}
          </>
        }
      </div>
    );
  }
  public onMouseEnterSection(item:any) {
    this.setState({
      showSectionEditBtn: true,
      showSectionID: item.UniqueId
    });
  }
  public onMouseLeaveSection(item:any) {
    // this.setState({
    //   showSectionEditBtn: false,
    // });
  }
  public showComponentEditOption(item:any) {
    this.setState({
      showComponentEditOption: true,
      componetSectionID: item.UniqueId
    });
  }
}