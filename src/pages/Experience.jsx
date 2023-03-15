import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@mui/icons-material/School"
import "../styles/Experience.css"
export function Experience() {
  return (
    <div className='experiences'>
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date="2018-2021"
        iconStyle={{background:"#3e497a", color: "#fff"}}
        icon={<SchoolIcon/>}></VerticalTimelineElement>
        <div className='child'>
          <h3 className='vertical-timeline-element-title'>High School No. 2 in Przemyśl</h3>
          <p>High School Diploma</p>
        </div>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date="2021-present"
        iconStyle={{background:"#3e497a", color: "#fff"}}
        icon={<SchoolIcon/>}></VerticalTimelineElement>
        <div className='child'>
          <h3 className='vertical-timeline-element-title'>Cracow University of Technology</h3>
          <p>Applied Computer Science</p>
        </div>
        
      </VerticalTimeline>

    </div>
  )
}