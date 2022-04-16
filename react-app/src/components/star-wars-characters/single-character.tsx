import { Avatar, Card, List, Image } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import './style.css'





export const SingleCharacter=()=>{

    const character = useSelector((state: RootState)=>state.character.charater)

    return (
   
      <div style={{margin: 20}}>

        <Card
            hoverable
            style={{ width: 240 }}
        >
            <Meta title={character.name} description={
                <>
                <List.Item >
                {/* <Skeleton avatar title={false} loading={loading} active> */}
                  <List.Item.Meta
                    avatar={<Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />}           
                    title={character.name}
                    description={
                      <>
                        <div>Gender: {character.gender}</div>
                        <div>Height: {character.height}</div>
                        <div>world: {character.homeWorld}</div>
                        <div>mass: {character.mass}</div>
                      </>
                    }
                   /> 
                
                {/* </Skeleton> */}
                
              </List.Item>
              </>
            } />
        </Card>,
        
    
        </div>
  
    
    )
}


