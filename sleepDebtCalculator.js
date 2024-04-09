const getSleepHours = day => {
    switch (day.toLowerCase()) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 7;
      case 'wednesday':
        return 6;
      case 'thursday':
        return 8;
      case 'friday':
        return 7;
      case 'saturday':
        return 9;
      case 'sunday':
        return 8;
      default:
        return 'Invalid day';
    }
  };
  
  const getActualSleepHours = () => {
    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    let totalSleepHours = 0;
    for (let day of daysOfWeek) {
      totalSleepHours += getSleepHours(day);
    }
    return totalSleepHours;
  };
  
  
  const getIdealSleepHours = () => {
    const idealHoursPerNight = 8;
    return idealHoursPerNight * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got more sleep than needed. You overslept by ${actualSleepHours - idealSleepHours} hours.`);
    } else {
      console.log(`You should get some rest. You are under your ideal sleep by ${idealSleepHours - actualSleepHours} hours.`);
    }
  };
  
  
calculateSleepDebt();