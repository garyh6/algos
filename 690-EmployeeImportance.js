/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let obj = {}
    for(let i=0; i<employees.length; i++) {
        obj[employees[i].id] = {
            importance: employees[i].importance,
            subordinates: employees[i].subordinates
        }
    }
    
    let res = 0
    let queue = [id]
    
    while(queue.length) {
        let empId = queue.shift()
        
        res += obj[empId].importance
        queue = [...queue, ...obj[empId].subordinates]
    }
    
    return res
};