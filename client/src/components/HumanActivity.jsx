import React from 'react';

function HumanActivity() {
  return (
    <div className='human_activity'>
      <h1>Human Activity</h1>
      <div className='content'>
        <section>
          <h3>Elephant Tusks</h3>
          <p>Tusks have been long sought after for its ivory. Comparable to diamonds for its status symbol, ivory is rare and beautiful. 
            In actuality, elephant tusks are teeth, and if 95% of it is made out of ivory, you can predict the severity of their poaching. 
            Much like how humans use their hands for daily tasks, elephants use their tusks to gather food, dig, move things around, and self defend.
            <br/>
            <br/>
          There’s a misconception that elephant tusks naturally shed and are able to grow back. In a survey conducted by the International Fund for Animal Welfare, IFAW, 7 out of 10 people weren’t aware that ivory came from dead elephants.</p>  
          Common things made from ivory are statues, jewelry, billiard balls, and piano keys. Every year 20,000 elephants are killed by poachers.
        </section>
        <img className='two' src='../../client/elephant.jpg'/>
      </div>
    </div>
  )
}

export default HumanActivity;