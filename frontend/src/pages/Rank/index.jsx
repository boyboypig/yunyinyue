import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, ListItem, SongList } from './style'
import Scroll from '@/components/common/Scroll'
import { EnterLoading } from '../Singers/style'
import Loading from '@/components/common/loading'
import { getRankList } from './store/actionCreators'
import { filterIndex } from '@/api/utils'



function Rank(props) {
  const {
    enterLoading,
    songsCount,
    rankList
  } = props
  const {
    getRankListDispatch
  } = props
  useEffect(() => {
    // setTimeout(() => {
    //   rankList.push({id: 2}) 
    // }, 1000)
    getRankListDispatch()
  }, [])
  let globalStartIndex = filterIndex(rankList)
  let officalList = rankList.slice(0, globalStartIndex)
  let globalList = rankList.slice(globalStartIndex)
  console.log(globalList)
  const renderRankList = () => {
    return (
      <div className='header_wrapper'>
        {
          officalList.map(item => {
            return (
              <ListItem>
                <div className='image_wrapper'>
                  <img src={item.coverImgUrl} width="100%" height="100%" alt="" />
                  <span className="update_frequecy">{item.updateFrequency}</span>
                </div>
                <ul>
                  {item.tracks.map((item, index) => {
                    return (
                      <li key={index}>{index + 1}.{item.first}-{item.second}</li>
                    )
                  })}
                </ul>
              </ListItem>
            )
          })
        }
      </div>

    )
  }
  let displayStyle = enterLoading ? { "display": "none" } : { "display": "" };//如果为真显示
  console.log(globalStartIndex, officalList, rankList)

  return (
    <Container play={songsCount}>
      <Scroll>
        <div>
          <h1 className='offical' style={displayStyle}>官方榜</h1>
          {renderRankList(officalList)}
          <h1 className='offical' style={displayStyle}>国际榜</h1>
          {renderRankList(globalList)}
          {enterLoading && <EnterLoading><Loading></Loading></EnterLoading>}
        </div>
      </Scroll>
    </Container>
  )
}
const mapStateToProps = (state) => {

  return {
    rankList: state.rank.rankList,
    songsCount: state.player.playList.length,
    enterLoading: state.rank.enterLoading
  }
}
// 状态改变的流程 
// 数据状态变得万无一失
const mapDispatchToProps = (dispatch) => {
  return {
    getRankListDispatch() {
      dispatch(getRankList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rank)
