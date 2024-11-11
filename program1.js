/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let n=len(s)
    const stk=[]
    let stklen=0
    for (let i=0;i<n;i++){
        if (s[i]==='(' || s[i]==='[' || s[i]=='{'){
            stk.push(s[i])
            stklen+=1
        }
        else if (s[i]===')'){
            while (stk[stklen-1]==='('){
                stk.pop()
                stklen-=1
            }
        }
        else if (s[i]===']'){
            while (stk[stklen-1]==='['){
                stk.pop()
                stklen-=1
            }
        }
        else{
            while (stk[stklen-1]==='{'){
                stk.pop()
                stklen-=1
            }
        }
    }
    return !stk;
};

module.exports = { isValid };

