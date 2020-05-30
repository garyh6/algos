let Node = class {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}

let DLL = class {
    constructor() {
        this.head = new Node()
        this.tail = new Node()
        this.head.next = this.tail
        this.tail.prev = this.head
        this.length = 0
    }
    
    add = function(node) {
        let next_node = this.head.next
        node.next = next_node
        next_node.prev = node
        node.prev = this.head
        this.head.next = node

        this.length += 1
        return node
    }

    remove = function(node) {
        let next_node = node.next
        let prev_node = node.prev
        next_node.prev = prev_node
        prev_node.next = next_node
        this.length -= 1
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.DLL = new DLL()
    this.cache = {}
};


/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.cache[key]) return -1
    const val = this.cache[key].value
    this.DLL.remove(this.cache[key])
    this.cache[key] = this.DLL.add(new Node(key, val))
    
    return val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache[key]) this.DLL.remove(this.cache[key])
    this.cache[key] = this.DLL.add(new Node(key, value))
    
    if(this.DLL.length > this.capacity) {
        const tail = this.DLL.tail.prev
        this.DLL.remove(tail)
        delete this.cache[tail.key]
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */