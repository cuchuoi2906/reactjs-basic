import React from 'react';

class ChildComponent extends React.Component {
    //re-render
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclickDelete = (job) => {
        console.log('>>> handleOnclickDelete: ', job)
        this.props.deleteAJob(job)
    }
    handOnchangeName = (event) =>{
        console.log('>>> handleOnclickDelete: ', event.target.value);
        this.props.setStateNameLable(event.target.value);
    }

    render() {
        let { arrJobs,arrNameLable } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>> check conditional: ', check)
        console.log('>>> check arrNameLable: ', arrNameLable)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                            <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })

                            }
                            <label id="idLableName" htmlFor="namedInput">{arrNameLable}:</label>
                            <input id="namedInput" onChange={(event) => this.handOnchangeName(event)} type="text" name="name"/>
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )

    }
}

// const ChildComponent = (props) => {

//     let { arrJobs } = props;

//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if (+item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }

//                     })

//                 }

//             </div>
//         </>
//     )
// }
export default ChildComponent;