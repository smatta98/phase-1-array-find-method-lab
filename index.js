superbowlWin = (array) => {
    const result = array.find(record => record.result === 'W')
    return !!result ? result.year : undefined
  } 


  