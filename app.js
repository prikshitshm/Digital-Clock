function updateClock(){

    const clock = document.getElementById('clock');
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amPm = hours>=12 ? 'PM' :'AM'
    
    hours= hours % 12 || 12;
    
    clock.textContent = `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}:${amPm}`
    
    }
    
    
    setInterval(updateClock,1000)
    
    updateClock();