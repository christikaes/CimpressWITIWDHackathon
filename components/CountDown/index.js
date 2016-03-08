import React from 'react'
import styles from './styles.css'

const CountDown = React.createClass({
  displayName: 'CountDown',

  getRemaining: function(){
    let dateFuture = new Date(Date.UTC(2016,3,1,4,59,59));
    let dateNow = new Date(Date.now());

    var seconds = Math.floor((dateFuture - (dateNow))/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);

    hours = hours-(days*24);
    minutes = minutes-(days*24*60)-(hours*60);
    seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

    return {
      "days": days,
      "hours": hours,
      "minutes": minutes,
      "seconds": seconds
    }
  },

  getInitialState: function() {
    return this.getRemaining();
  },
  tick: function() {
    var remaining = this.getRemaining();
    console.log(remaining)

    this.setState(remaining);
    if (this.state.days <= 0 && this.state.hours <= 0 && this.state.minutes <= 0 && this.state.seconds <= 0) {
      clearInterval(this.interval);
    }
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div className={styles.container}>
        <div className={styles.countdown}>
          <div className={styles.block}>
            <span className={styles.time}>{this.state.days}</span>
            <div className={styles.label}>Days</div>
          </div>
          <div className={styles.block}>
            <span className={styles.time}>{this.state.hours}</span>
            <div className={styles.label}>Hours</div>
          </div>
          <div className={styles.block}>
            <span className={styles.time}>{this.state.minutes}</span>
            <div className={styles.label}>Minutes</div>
          </div>
          <div className={styles.block}>
            <span className={styles.time}>{this.state.seconds}</span>
            <div className={styles.label}>Seconds</div>
          </div>
        </div>

        <h1>Until Submissions Close(EST)</h1>
      </div>
    );
  }
});

export default CountDown;