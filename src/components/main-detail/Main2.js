import React, {useState} from 'react';

const Main2 = () => {
  return(
    <section id="main2" className="page">
      <div className="tit">OUR ACTIVITY</div>
      <div className="sub_tit">체계화된 커리큘럼을 기반으로 다방면의 활동 진행</div>
      <div className="act_container">
        <div className="act_item item1">
          <p className="item_tit">WEEKLY SESSION</p>
        </div>
        <div className="act_item item2">
          <p className="item_tit">PROJECT</p>
        </div>
        <div className="act_item item3">
          <p className="item_tit">NETWORKING</p>
        </div>
        <div className="act_item item4" >
          <p className="item_tit">WRITING</p>
        </div>
      </div>
    </section>
  )
}

export default Main2