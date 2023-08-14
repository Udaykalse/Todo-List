// import React from 'react'
// import { Card } from 'react-bootstrap'
// import { connect } from 'react-redux'

// const Displaycounts = ({todos}) => {
//   return (
//     <Card className='shadow-sm border border-0'>
//         <Card.Body>
//             <h4>
//                 Number of Todos:{todos.lenght}
//             </h4>
//         </Card.Body>
//     </Card>
//   )
// }

// const mapStateToProps=(state)=>({
//   todos:state.todoReducer
// })

// const mapDispatchToProps=(dispatch)=>({})

// export default connect(mapDispatchToProps,mapStateToProps) (Displaycounts)


import React from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';

const DisplayCounts = ({ todos }) => {
  return (
    <Card className='shadow-sm border border-0'>
      <Card.Body>
        <h4>
          Number of Todos: {todos.length} {/* Fixed typo here */}
        </h4>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todoReducer
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCounts); // Corrected the order of mapStateToProps and mapDispatchToProps
