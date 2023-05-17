// Time Words

// Difficulty Medium Concepts General

// Write a function that turns a string of 24-hour time into words.

// You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.


// Handle noon and midnight specially:
    // timeWord("00:00")
    // // 'midnight'
    // timeWord("12:00")
    // // 'noon'

// Otherwise, covert times to text:
    // timeWord("01:00")
    // // "one o'clock am"
    // timeWord("06:01")
    // // 'six oh one am'
    // timeWord("06:10")
    // // 'six ten am'
    // timeWord("06:18")
    // // 'six eighteen am'
    // timeWord("06:30")
    // // 'six thirty am'
    // timeWord("10:34")
    // // 'ten thirty four am'

// Don’t forget to handle early morning properly:
    //  timeWord("00:12")
    //  // 'twelve twelve am'

// For times after noon, add ‘pm’:
    // timeWord("12:09")
    // // 'twelve oh nine pm'
    // timeWord("23:23")
    // // 'eleven twenty three pm'


// format that will be sent 00:00
//create function that takes time string in (valid format provided). 
function timeWord(x){
    let hourRef = {0: 'twelve', 1: 'one', 2: 'two', 3: 'three',
                    4: 'four', 5: 'five', 6: 'six',
                    7: 'seven', 8: 'eight', 9: 'nine',
                    10: 'ten', 11: 'eleven', 12: 'twelve'}
    let minRefTens = {'2': 'twenty', '3': 'thirty',
                    '4': 'forty', '5': 'fifty'}               
    let minRef = {0: 'oh', 1: 'one', 2: 'two', 3: 'three',
                    4: 'four', 5: 'five', 6: 'six',
                    7: 'seven', 8: 'eight', 9: 'nine',
                    10: 'ten', 11: 'eleven', 12: 'twelve',
                    13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
                    16: 'sixteen', 17: 'seventeen', 18: 'eighteen',19: 'nineteen'}

    let hours = x.slice(0,2)
    let minutes = x.slice(3,5)
    let time = [] //=>solution variable
    // catching noon and midnight
    if(x === "00:00"){
        time.push("Midnight")
    }else if(x === "12:00"){
        time.push("Noon")
    }else{
        //hours
        time.push(hourRef[ (+hours > 12) ? hours-12 : +hours])
        //minutes
        // console.log(`hello minutes: ${minutes}`)
        if(minutes === "00"){
            time.push("O'Clock")
        }else if(+minutes < 10){
            time.push(minRef[+minutes[0]])
            time.push(minRef[+minutes[1]])
        }else if (10 < +minutes && +minutes< 20){
            time.push(minRef[+minutes])
        }else{
            // time.push(minRefTens[+minutes[0]])
            time.push(+minutes[1]!= 0? minRefTens[+minutes[0]]+ minRef[+minutes[1]]: minRefTens[+minutes[0]])
        }
        //add pm or am based on our value
        time.push((+hours >= 12) ? "pm": "am")
    }
    //return time in words
    return time.join(' ')
}


console.log(timeWord('01:29'))  // => one twentynine am

console.log(timeWord("00:00")) // => Midnight

console.log(timeWord("06:01")) // => six oh one am

console.log(timeWord("16:05")) // => four oh five pm