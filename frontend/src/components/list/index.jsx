import {memo} from 'react'
import LazyLoad from 'react-lazyload'
import music from './music.png'
import { ListWrapper, List, ListItem } from './style'
import { useNavigate } from 'react-router-dom'
import { formatTenThousand } from '../../utils/string'

function RecommendList({ recommendList }) {
    let navigate = useNavigate()
    const gotoDetail = (id) => {
        navigate(`/recommend/${id}`)
    }
    return (
        <ListWrapper>
            <h1 className="title">推荐歌单</h1>
            <List>
            {
                recommendList.map(item => {
                    return (
                        <ListItem key={item.id} 
                        onClick={gotoDetail.bind(null, item.id)}>
                            <div className="img_wrapper">
                                <div className="decorate"></div>
                                <LazyLoad 
                                placeholder={<img width="100%" 
                                height="100%" src={music}/>}>
                                    <div className='icon-item'>
                                        <span className="icon iconfont">&#xe885;</span>
                                        <div className="itemwan">{item.playCount? formatTenThousand(item.playCount): '0'}</div>
                                    </div>
                                    <img 
                                    width="100%" 
                                    height="100%"
                                    src={item.picUrl + "?param=300x300"} alt="" />
                                </LazyLoad>
                            </div>
                            <div className='desc'>{item.name}</div>
                        </ListItem>
                    )
                })
            }
            </List>
        </ListWrapper>
    )
}
// 性能优化  子组件
export default memo(RecommendList)