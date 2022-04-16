import { gql, useQuery } from '@apollo/client'
import { List, Avatar, Button, Image, Typography } from 'antd'
import Title from 'antd/lib/typography/Title'
import './style.css'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCharacter } from '../../redux/reducers'
import React from 'react'








export const SWCharacters=()=>{
  const [cursor, setCursor] = React.useState<number>(0)


  
  const PEOPLE = gql`
  {
        people {
          name
          height
          mass
          gender
          homeWorld
        }
      }

          `

    const dispatch = useDispatch()
    
    const { loading, data, fetchMore } = useQuery(PEOPLE)

   
  
   

    let navigate = useNavigate();

    const onClick=(character: any)=>{
      navigate('/character')
      dispatch(setCharacter(character))
    }

    
   

    return (
      <div style={{margin: 20}}>

        <Typography>
        <Title>Star Wars Characters</Title>
        </Typography>
        
      
     <List
      className="demo-loadmore-list"
      loading={loading}
      itemLayout="horizontal"
      bordered
      // loadMore={fetchMore}
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={data ? data.people : []}
      renderItem={(item: any) => (
        
        <List.Item  onClick={()=>onClick(item)} key={item.name}>
          {/* <Skeleton avatar title={false} loading={loading} active> */}
            <List.Item.Meta
              avatar={<Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />}           
              title={item.name}
              description={
                <>
                  <div>Gender: {item.gender}</div>
                  <div>Height: {item.height}</div>
                  <div>world: {item.homeWorld}</div>
                  <div>mass: {item.mass}</div>
                </>
              }
            />
          
          {/* </Skeleton> */}
          
        </List.Item>
       
        
      )}
      
      
    />
   
    
    
    </div>)
}


