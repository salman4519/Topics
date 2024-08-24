const numbers = {
    1 : "one",
    2 : "two",
    3 : "three"
    
    
    
    }
    
    let a  = new Map(Object.entries(numbers))
    a.delete('1')
    a.set(4,"four")
    console.log(a.get('1'))
    