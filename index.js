// code your solution here

function superbowlWin(records) {
    const record = records.find(record => record.result === 'W');
    return record === undefined ? undefined : record.year;
}