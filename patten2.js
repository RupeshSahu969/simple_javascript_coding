let n=5;

function Patten(){
    
    for(let i=1; i<=n; i++)
    {
        let k=""
        for(let j=1; j<=i; j++)
        {
            k +=j
        }
        console.log(k)
        
    }
    
}

Patten(n)

// output
// 1
// 12
// 123
// 1234
// 12345