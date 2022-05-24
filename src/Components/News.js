import React,{useEffect,useState,useContext} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import myContext from '../Context/Context';

export default function News(){
    const {catalogue,setcatalogue} = useContext(myContext)
//     static propTypes = {
//         category: PropTypes.string
//     }
//     constructor(props){
//         super(props)
//         this.state={
//             articles : [],
//             limit: 50,
//             offset: 20,
//             total: 0,
//             load: true
//         }
//         document.title=this.props.category==="general"?"News18-Daily|Important|news":`${this.props.category}-News18`
//         this.props.progress(10)
//     }
//    async componentDidMount(){
//         let url=`http://api.mediastack.com/v1/news?access_key=308925c6ec05cddf42ba273d3d912ac1&limit=${this.props.limit}&offset=${this.props.offset}&countries=in&categories=${this.props.category}`
//         this.setState({load:true})
//         let data= await fetch(url)
//         let dataparse=await data.json()
//         this.props.progress(50)
//         this.setState({articles:dataparse.data,
//         total:dataparse.pagination.total,
//     load: false})
//     this.props.progress(100)
//     }
    
//     fetchMoreData= async ()=>{
//         const url=`http://api.mediastack.com/v1/news?access_key=308925c6ec05cddf42ba273d3d912ac1&countries=in&categories=${this.props.category}&limit=${this.props.limit}&offset=${this.props.offset}`
//         let data= await fetch(url)
//         let dataparse=await data.json()
//         this.setState({articles:this.state.articles.concat(dataparse.data),load: false})
//     }
//     setupper=(val)=>{
//     val = val.trim();
//     val = val.charAt(0).toUpperCase() + val.slice(1);
//     return val;
//     }
useEffect(() => {
    const handle=async ()=>{
    const res=await axios.get('https://fakestoreapi.com/products')
    setcatalogue(res.data)
    }
    handle()
}, [])
        return (
            <>
                <div className="text-center my-3"><h1><strong>Top Products</strong><span className="badge bg-secondary"></span></h1></div>
                <hr />
                {/* <div className="text-center">{this.state.load&&<Spinner/>}</div>
                <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    hasMore={this.state.articles.length!==this.state.total}
    loader={<div className="text-center">{<Spinner/>}</div>}> */}
        <div className="container my-3">
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 align-items-stretch g-4 py-5">
                    {catalogue!==null&&catalogue.map((elem)=>{
                        return <div key={elem.id} className="col">
                            <Newsitem title={elem.title} des={elem.description} img={elem.image}  price={elem.price}/>
                        </div>
                    })}
                    </div>
                    </div>
                    {/* </InfiniteScroll> */}
            </>
        )
    }

