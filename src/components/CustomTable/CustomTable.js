import React from 'react';
import styles from './CustomTable.module.scss';
import { Table } from 'antd';
import valueIncreaseIcon from '../../assets/icons/valueIncrease.png'
import valueDecreaseIcon from '../../assets/icons/valueDecrease.png'
import CustomProgresBar from '../CustomProgresBar/CustomProgresBar';


const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',      
    },
    {
      title: 'Domain',
      dataIndex: 'domain',
      key: 'domain',
      render: text => <a style={{color:'#4D1ED3'}} href="#">{text}</a>,
    },
    {
      title: 'Adtracker index',
      dataIndex: 'trackerIndex',
      key: 'trackerIndex',
      render:(value,row,index)=>{

        return  (
            <div>
                <span style={{marginRight:'20px'}}>{row.trackerIndex}</span>
                <span style={{marginRight:'10px'}}> {row.trend==='up'?'+':row.trend==='down'?'-':''} {row.changeIndex}</span>
                {
                    row.trend!=='same' && (
                        <img src={row.trend==='up'?valueIncreaseIcon:valueDecreaseIcon} alt="index-trend-pic"/>
                    )
                }
            </div>
        )
      }
    },
    {
        title: 'Middle position',
        dataIndex: 'position',
        key: 'position',
        render:(value,row,index)=>{

            return {
                children:(
                    <div>
                        <span style={{marginRight:'20px'}}>{row.position}</span>
                        <span style={{marginRight:'10px'}}> {row.posTrend==='up'?'+':row.trend==='down'?'-':''} {row.changePos}</span>
                        {
                            row.posTrend!=='same' && (
                                <img src={row.posTrend==='up'?valueIncreaseIcon:valueDecreaseIcon} alt="position-trend-pic"/>
                            )
                        }
                    </div>
                ),
            }
          }
    },
    {
        title: 'Visibility',
        dataIndex: 'visibilityPercent',
        key: 'visibilityPercent',
        width:'150px',
        render:(value,row,index)=>{
            return {
                children:(
                    <div style={{display:'flex'}}>
                        <span style={{marginRight:'12px'}}>{row.visibilityPercent}%</span>
                        <CustomProgresBar percent={value}/>
                    </div>
                )
            }
        }
    },
    {
        title: 'Number of changes',
        dataIndex: 'nmbChanges',
        key: 'nmbChanges',
        width:'110px',
        render:(value,row,index)=>{
            return {
                children:(
                    <div style={{display:'flex'}}>
                        <span style={{marginRight:'12px'}}>{row.nmbChanges}</span>
                        <CustomProgresBar percent={value/8*100}/>
                    </div>
                )
            }
        }
    }
  ];


  const data = [
    {
      key: '1',
      no: '1',
      domain:"incom-auto.com",
      trackerIndex:"1.3",
      changeIndex:0.2,
      trend:'up',
      changePos:0.3,
      posTrend:'up',
      position:"1.2",
      visibilityPercent:"96",
      nmbChanges:3
    },
    {
      key: '2',
      no: '2',
      domain:"altera-auto.com",
      trackerIndex:"1.8",
      changeIndex:0.4,
      trend:'up',
      changePos:0.2,
      posTrend:'up',
      position:"1.8",
      visibilityPercent:"92",
      nmbChanges:6
    },
    {
      key: '3',
      no: '3',
      domain:"autotrader.com",
      trackerIndex:"2.7",
      changeIndex:2.5,
      trend:'same',
      changePos:1.8,
      posTrend:'same',
      position:"2,0",
      visibilityPercent:"58",
      nmbChanges:1
    },
    {
      key: '4',
      no: '4',
      domain:"grandauto.us",
      trackerIndex:"2.8",
      changeIndex:0.5,
      trend:'down',
      changePos:2.1,
      posTrend:'down',
      position:"2.5",
      visibilityPercent:"74",
      nmbChanges:8
    },
  ];



const CustomTable=()=>{
    return (
        <div className={styles.container}>
            <Table
            className={styles.customTable}
            rowClassName={(record, index)=>{
                return styles.customRowClass
            }}
            pagination={false} 
            columns={columns} 
            dataSource={data} />
        </div>
    )
}

export default CustomTable