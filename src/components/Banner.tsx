import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import img2 from '../../Images/img2.png';
export default class Banner extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
    };
}
public  render(): React.ReactElement<any> {
    const settings = {
      arrows: false,
      arrowsBlock: false,
      autoplay: true,
      duration: 100,
      shift: 10,
      swipe: false,
      virtualList: true,
      wheel: true
    };
    return (
      <div className={'card'} style={{ height: 300 }}>
       
      </div>
    );
  }
}
