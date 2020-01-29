/**
 * Graph is advance datastrucure which consist edges and vertex. The vertex is individual node which will store data and any other information.
 * Graph is denoted as <E,V> i.e E means Edges and V means Vertices where vertices are connected by edges.
 * Below graph is the implementaion of undirected graph, i.e. no direction in edges.
 * There are two ways of representing the graph. 1: Adjacency Matrix and Adjacency List.
 * The matrix(V*V) is filled with 1 if there is connection between two vertices else filled with 0.
 * The adjacency list is implemented by adding vertex detail in particular vertice's list, if there is connection.
 */
class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentNode = {};
    }

    /**
     * This initialize the initial empty list for each vertices.
     * @param {*} value 
     */
    addVertex(value) {
        this.nodes++;
        this.adjacentNode[value] = [];
    }

    /**
     * Add the vetex to the each nodes list. As this is undirected list.
     * @param {*} node1 
     * @param {*} node2 
     */
    addEdge(node1, node2) {
        this.adjacentNode[node1].push(node2);
        this.adjacentNode[node2].push(node1);
    }

    /**
     * This method is used to display the list for each vertices.
     */
    showConnections() {
        const allNodes = Object.keys(this.adjacentNode);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentNode[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}


var myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

/**
 * Output
 0-->1 2
1-->3 2 0
2-->4 1 0
3-->1 4
4-->3 2 5
5-->4 6
6-->5
 */

myGraph.showConnections(); 