import * as React from 'react';
import * as ReactDOM from 'react-dom';
const quickTiles = [
    { key: 'Facebook', text: 'Facebook', show: true },
    { key: 'Website', text: 'Website', show: true },
    { key: 'Twitter', text: 'Twitter', show: true },
    { key: 'Request', text: 'Request', show: false },
    { key: 'Files', text: 'Files', show: true },
    { key: 'Documents', text: 'Facebook', show: true },
    { key: 'Twitter', text: 'Twitter', show: true },
    { key: 'Request', text: 'Request', show: false },
    { key: 'Files', text: 'Files', show: true },
    { key: 'Documents', text: 'Facebook', show: true },
    { key: 'Twitter', text: 'Twitter', show: true },
    { key: 'Request', text: 'Request', show: false },
    { key: 'Files', text: 'Files', show: true },
    { key: 'Documents', text: 'Facebook', show: true },
    { key: 'Twitter', text: 'Twitter', show: true },
    { key: 'Request', text: 'Request', show: false },
    { key: 'Files', text: 'Files', show: true },
    { key: 'Documents', text: 'Facebook', show: true },
];
export default class TilesQuickLink extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            quickTiles: quickTiles,
            gridView: false
        };
    }
    public scrolltilesQL = (e:any) => {

        // e.preventDefault()
        // var container = document.getElementById('scrollTiles')
        // var containerScrollPosition = document.getElementById('scrollTiles').scrollLeft
        // container.scrollTo({
        //     // top: 0,
        //     left: containerScrollPosition + 20,

        // });
        // function scrollHorizontally(e:any) {
        //     e = window.event || e;
        //     var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        //     document.getElementById('scrollTiles').scrollLeft -= (delta * 40); // Multiplied by 40
        //     e.preventDefault();
        // }

        // if (document.getElementById('scrollTiles').addEventListener) {
        //     // IE9, Chrome, Safari, Opera
        //     document.getElementById('scrollTiles').addEventListener('mousewheel', scrollHorizontally, false);
        //     // Firefox
        //     document.getElementById('scrollTiles').addEventListener('DOMMouseScroll', scrollHorizontally, false);
        // } else {
        //     // IE 6/7/8
        //     // document.getElementById('yourDiv').attachEvent('onmousewheel', scrollHorizontally);
        // }
        // if (document.getElementById('scrollTiles').scrollLeft == (document.getElementById('scrollTiles').scrollWidth - document.getElementById('scrollTiles').clientWidth)) {

        //     this.setState({ showRightArrow: false });
        // } else {
        //     this.setState({ showRightArrow: true });

        // }
        // if (document.getElementById('scrollTiles').scrollLeft == 0) {
        //     this.setState({ showLeftArrow: false });
        // } else {
        //     this.setState({ showLeftArrow: true });

        // }
        // window.scroll(0,0)
    }
    public scrollLeft() {
        // document.getElementById('scrollTiles').scrollLeft -= 400;

        // if (document.getElementById('scrollTiles').scrollLeft == 0) {
        //     this.setState({ showLeftArrow: false });
        // }
        // this.setState({ showRightArrow: true });
    }
    public scrollRight() {
        //scrollWidth
        // document.getElementById('scrollTiles').scrollLeft += 400;
        // if (document.getElementById('scrollTiles').scrollLeft == (document.getElementById('scrollTiles').scrollWidth - document.getElementById('scrollTiles').clientWidth)) {

        //     this.setState({ showRightArrow: false });
        // }
        // this.setState({ showLeftArrow: true });
    }
    public render() {

        return (
            <div className="tilesQL-wrapper ">
                <span className="homeBoxTitle">Quick Tiles</span>
                <span className="tilesQLFuncDiv">
                    <i className="ms-Icon ms-Icon--Edit tilesQLFuncBtn" aria-hidden="true" onClick={() => this.setState({ isEditMode: true })}></i>
                    <i className={this.state.gridView ? "ms-Icon ms-Icon--TripleColumn tilesQLFuncBtn" : "ms-Icon ms-Icon--GridViewSmall tilesQLFuncBtn"} aria-hidden="true" onClick={() => this.setState({ gridView: !this.state.gridView })}></i>

                    <i className="ms-Icon ms-Icon--Save tilesQLFuncBtn" aria-hidden="true"></i>
                </span>
                {this.state.isEditMode?
                    <div>
                        <div id={'scrollTiles'} className={"tileGridView tilesQLList"} onWheel={this.scrolltilesQL}>
                            {this.state.quickTiles && this.state.quickTiles.map((item:any, i:any) => {

                                return (

                                    <div className={"tilesQL"} key={i} >
                                        <i className="ms-Icon ms-Icon--Mail tilesQLIcon" aria-hidden="true"></i><br />
                                        {item.text}
                                    </div>
                                );

                            })}
                        </div>
                    </div> :
                    <>
                        <div id={'scrollTiles'} className={this.state.gridView ? "tileGridView tilesQLList" : "tilesQLList"} onWheel={this.scrolltilesQL}>
                            {this.state.quickTiles && this.state.quickTiles.map((item:any, i:any) => {
                                if (item.show) {
                                    return (

                                        <div className={"tilesQL"} key={i} >
                                            <i className="ms-Icon ms-Icon--Mail tilesQLIcon" aria-hidden="true"></i><br />
                                            {item.text}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        {!this.state.gridView && (
                            <div className="paddles">
                                {this.state.showLeftArrow &&
                                    (<span className='left-paddle paddle'><i className="ms-Icon ms-Icon--ChevronLeft paddleArrow" aria-hidden="true" onClick={() => this.scrollLeft()}></i></span>)
                                }
                                {this.state.showRightArrow &&
                                    (<span className="right-paddle paddle"><i className="ms-Icon ms-Icon--ChevronRight paddleArrow" aria-hidden="true" onClick={() => this.scrollRight()}></i></span>)
                                }
                            </div>
                        )}
                    </>}

            </div>
        );
    }
}
