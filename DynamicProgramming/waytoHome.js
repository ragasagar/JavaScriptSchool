/**
Problem Statement:
 You are located at the top left corner of m*n grid. Your job is to reach the right buttom of the grid where your Home is located.
 Rules:
    You can only move in right and down direction.
 Question:
    Find the all possible way to reach you final destination
Solution:
    Check if the repitative path exist in the solution. If it do exist that means it can be solved by using dynamic programming.
    First break down the problem into smaller sub problem. Save the value of the smaller sub problems and use it to solve the big problem.
    */

function numofWays(n, m){
    let path = []
    for(let i =0 ; i < n; i++){
        path[i] = [];
        path[i][m-1] = 1;
    }
    for(let j = 0; j< m ; j++){
        path[n-1][j] = 1;
    }

    for(let i = n-2 ; i >= 0 ; i--){
        for(let j = m-2 ; j >= 0 ; j --){
            path[i][j] = path[i][j+1] + path[i+1][j];
        }
    }
    console.log(path);
}

numofWays(8,9);

/**
 * Output:
[ [ 6435, 3432, 1716, 792, 330, 120, 36, 8, 1 ],
  [ 3003, 1716, 924, 462, 210, 84, 28, 7, 1 ],
  [ 1287, 792, 462, 252, 126, 56, 21, 6, 1 ],
  [ 495, 330, 210, 126, 70, 35, 15, 5, 1 ],
  [ 165, 120, 84, 56, 35, 20, 10, 4, 1 ],
  [ 45, 36, 28, 21, 15, 10, 6, 3, 1 ],
  [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ]
 */