import styled from "styled-components";
import style from '@/assets/global-style'

export const Container = styled.div`
    position: fixed;
    top: 4.5rem;
    bottom: ${props => props.play > 0? "3rem" : 0};
    width: 100%;
    .offical, .global {
        margin: 0.5rem 0.25rem;
        padding-top: 0.75rem;
        font-weight: 700;
        font-size: ${style["font-size-m"]};
        color: ${style["font-color-desc"]};
    }

`
export const ListItem = styled.div`
    position: relative;
    top: 0.45rem;
    width: 100%;
    height: 5rem;
    margin-bottom: 0.2rem;
    .image_wrapper{
        display: flex;
        width: 6rem;
        height: 5rem;
        float: left;
        border-radius: 1rem;
        margin-left: 0.1rem;
        img{
            border-radius: 0.3rem;
        }
        .update_frequecy{
            position: absolute;
            left: 7px;
            bottom: 7px;
            font-size: 0.6rem;
            color: white;
    }
    }
    ul {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 10px 10px;
    >li{
        font-size: 0.8rem;
        color: grey;
        display: flex;
        align-items: flex-start;
        margin-bottom: 0.6rem;
  }
    }
    
`
export const SongList = styled.div`
`