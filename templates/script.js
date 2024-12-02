// // // // Fetch blockchain data and update the page
// // // async function fetchBlockchainData() {
// // //   try {
// // //     // Fetch blockchain chain data
// // //     const chainResponse = await fetch("http://127.0.0.1:5000/chain");
// // //     const chainData = await chainResponse.json();

// // //     // Create and populate the blockchain table
// // //     const chainTable = document.createElement("table");
// // //     chainTable.innerHTML = `
// // //       <thead>
// // //         <tr>
// // //           <th>Index</th>
// // //           <th>Previous Hash</th>
// // //           <th>Proof</th>
// // //           <th>Timestamp</th>
// // //           <th>Votes</th>
// // //         </tr>
// // //       </thead>
// // //       <tbody>
// // //         ${chainData.chain
// // //           .map(
// // //             (block) => `
// // //           <tr>
// // //             <td>${block.index}</td>
// // //             <td>${block.previous_hash}</td>
// // //             <td>${block.proof}</td>
// // //             <td>${new Date(block.timestamp * 1000).toLocaleString()}</td>
// // //             <td>${block.votes.length > 0 ? block.votes.length : "No votes"}</td>
// // //           </tr>
// // //         `
// // //           )
// // //           .join("")}
// // //       </tbody>
// // //     `;
// // //     document.getElementById("chain-container").appendChild(chainTable);

// // //     // Display the last block mined
// // //     const lastBlockContainer = document.getElementById("last-block");
// // //     const lastBlock = chainData.chain[chainData.chain.length - 1];
// // //     lastBlockContainer.innerHTML = `
// // //       <p><strong>Index:</strong> ${lastBlock.index}</p>
// // //       <p><strong>Previous Hash:</strong> ${lastBlock.previous_hash}</p>
// // //       <p><strong>Proof:</strong> ${lastBlock.proof}</p>
// // //       <p><strong>Timestamp:</strong> ${new Date(
// // //         lastBlock.timestamp * 1000
// // //       ).toLocaleString()}</p>
// // //       <p><strong>Votes:</strong> ${
// // //         lastBlock.votes.length > 0 ? lastBlock.votes.length : "No votes"
// // //       }</p>
// // //     `;
// // //   } catch (error) {
// // //     console.error("Error fetching blockchain data:", error);
// // //   }
// // // }

// // // // Fetch new mined block when mine button is clicked
// // // async function mineBlock() {
// // //   try {
// // //     // Call the /mine endpoint to mine a new block
// // //     const mineResponse = await fetch("http://127.0.0.1:5000/mine");
// // //     const mineData = await mineResponse.json();

// // //     // Display the mined block
// // //     const lastBlockContainer = document.getElementById("last-block");
// // //     lastBlockContainer.innerHTML = `
// // //       <p><strong>Index:</strong> ${mineData.index}</p>
// // //       <p><strong>Previous Hash:</strong> ${mineData.previous_hash}</p>
// // //       <p><strong>Proof:</strong> ${mineData.proof}</p>
// // //       <p><strong>Timestamp:</strong> ${new Date(
// // //         mineData.timestamp * 1000
// // //       ).toLocaleString()}</p>
// // //       <p><strong>Votes:</strong> ${
// // //         mineData.votes.length > 0 ? mineData.votes.length : "No votes"
// // //       }</p>
// // //     `;

// // //     // Refresh the blockchain data
// // //     fetchBlockchainData();
// // //   } catch (error) {
// // //     console.error("Error mining new block:", error);
// // //   }
// // // }

// // // // Submit vote form
// // // async function submitVote(event) {
// // //   event.preventDefault();

// // //   const voterId = document.getElementById("voter_id").value;
// // //   const candidate = document.getElementById("candidate").value;

// // //   const voteData = {
// // //     voter_id: voterId,
// // //     candidate: candidate,
// // //   };

// // //   try {
// // //     // Submit vote via POST request
// // //     const response = await fetch("http://127.0.0.1:5000/vote", {
// // //       method: "POST",
// // //       headers: {
// // //         "Content-Type": "application/json",
// // //       },
// // //       body: JSON.stringify(voteData),
// // //     });

// // //     const result = await response.json();
// // //     if (response.status === 201) {
// // //       alert("Vote submitted successfully!");
// // //     } else {
// // //       alert(`Error: ${result.error}`);
// // //     }
// // //   } catch (error) {
// // //     console.error("Error submitting vote:", error);
// // //   }
// // // }

// // // // Event listeners
// // // window.onload = fetchBlockchainData;
// // // document.getElementById("vote-form").addEventListener("submit", submitVote);
// // // document.getElementById("mine-button").addEventListener("click", mineBlock);
// // // Fetch blockchain data and update the page
// // async function fetchBlockchainData() {
// //   try {
// //     // Fetch blockchain chain data
// //     const chainResponse = await fetch("/chain");
// //     const chainData = await chainResponse.json();

// //     // Create and populate the blockchain table
// //     const chainTable = document.createElement("table");
// //     chainTable.innerHTML = `
// //       <thead>
// //         <tr>
// //           <th>Index</th>
// //           <th>Previous Hash</th>
// //           <th>Proof</th>
// //           <th>Timestamp</th>
// //           <th>Votes</th>
// //         </tr>
// //       </thead>
// //       <tbody>
// //         ${chainData.chain
// //           .map(
// //             (block) => `
// //           <tr>
// //             <td>${block.index}</td>
// //             <td>${block.previous_hash}</td>
// //             <td>${block.proof}</td>
// //             <td>${new Date(block.timestamp * 1000).toLocaleString()}</td>
// //             <td>${block.votes.length > 0 ? block.votes.length : "No votes"}</td>
// //           </tr>
// //         `
// //           )
// //           .join("")}
// //       </tbody>
// //     `;
// //     document.getElementById("chain-container").appendChild(chainTable);

// //     // Display the last block mined
// //     const lastBlockContainer = document.getElementById("last-block");
// //     const lastBlock = chainData.chain[chainData.chain.length - 1];
// //     lastBlockContainer.innerHTML = `
// //       <p><strong>Index:</strong> ${lastBlock.index}</p>
// //       <p><strong>Previous Hash:</strong> ${lastBlock.previous_hash}</p>
// //       <p><strong>Proof:</strong> ${lastBlock.proof}</p>
// //       <p><strong>Timestamp:</strong> ${new Date(
// //         lastBlock.timestamp * 1000
// //       ).toLocaleString()}</p>
// //       <p><strong>Votes:</strong> ${
// //         lastBlock.votes.length > 0 ? lastBlock.votes.length : "No votes"
// //       }</p>
// //     `;
// //   } catch (error) {
// //     console.error("Error fetching blockchain data:", error);
// //   }
// // }

// // // Fetch new mined block when mine button is clicked
// // async function mineBlock() {
// //   try {
// //     // Call the /mine endpoint to mine a new block
// //     const mineResponse = await fetch("/mine");
// //     const mineData = await mineResponse.json();

// //     // Display the mined block
// //     const lastBlockContainer = document.getElementById("last-block");
// //     lastBlockContainer.innerHTML = `
// //       <p><strong>Index:</strong> ${mineData.index}</p>
// //       <p><strong>Previous Hash:</strong> ${mineData.previous_hash}</p>
// //       <p><strong>Proof:</strong> ${mineData.proof}</p>
// //       <p><strong>Timestamp:</strong> ${new Date(
// //         mineData.timestamp * 1000
// //       ).toLocaleString()}</p>
// //       <p><strong>Votes:</strong> ${
// //         mineData.votes.length > 0 ? mineData.votes.length : "No votes"
// //       }</p>
// //     `;

// //     // Refresh the blockchain data
// //     fetchBlockchainData();
// //   } catch (error) {
// //     console.error("Error mining new block:", error);
// //   }
// // }

// // // Submit vote form
// // async function submitVote(event) {
// //   event.preventDefault();

// //   const voterId = document.getElementById("voter_id").value;
// //   const candidate = document.getElementById("candidate").value;

// //   const voteData = {
// //     voter_id: voterId,
// //     candidate: candidate,
// //   };

// //   try {
// //     // Submit vote via POST request
// //     const response = await fetch("/vote", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(voteData),
// //     });

// //     const result = await response.json();
// //     if (response.status === 201) {
// //       alert("Vote submitted successfully!");
// //       fetchBlockchainData(); // Refresh blockchain data after voting
// //     } else {
// //       alert(`Error: ${result.error}`);
// //     }
// //   } catch (error) {
// //     console.error("Error submitting vote:", error);
// //   }
// // }

// // // Event listeners
// // window.onload = fetchBlockchainData;
// // document.getElementById("vote-form").addEventListener("submit", submitVote);
// // document.getElementById("mine-button").addEventListener("click", mineBlock);
// document.addEventListener("DOMContentLoaded", () => {
//   // Initially fetch blockchain data when the page loads
//   fetchBlockchainData();

//   // Handle form submission for voting
//   const voteForm = document.getElementById("voteForm");
//   voteForm.addEventListener("submit", async function (event) {
//     event.preventDefault();

//     const voterId = document.getElementById("voter_id").value;
//     const candidate = document.getElementById("candidate").value;

//     const voteData = {
//       voter_id: voterId,
//       candidate: candidate,
//     };

//     try {
//       // Send vote data to the Flask API
//       const response = await fetch("http://127.0.0.1:5000/vote", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(voteData),
//       });

//       const result = await response.json();
//       if (response.status === 201) {
//         alert("Vote submitted successfully!");
//       } else {
//         alert(`Error: ${result.error}`);
//       }
//     } catch (error) {
//       console.error("Error submitting vote:", error);
//     }
//   });

//   // Mine block button click handler
//   const mineButton = document.getElementById("mineButton");
//   mineButton.addEventListener("click", async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:5000/mine", {
//         method: "GET",
//       });

//       const result = await response.json();
//       if (response.status === 200) {
//         const minedBlockContainer = document.getElementById("minedBlock");
//         const minedBlock = `
//                   <h3>Newly Mined Block</h3>
//                   <pre>${JSON.stringify(result, null, 2)}</pre>
//               `;
//         minedBlockContainer.innerHTML = minedBlock;
//         fetchBlockchainData(); // Refresh blockchain data after mining
//       } else {
//         alert("Error mining block");
//       }
//     } catch (error) {
//       console.error("Error mining block:", error);
//     }
//   });
// });

// // Fetch blockchain data and display it
// async function fetchBlockchainData() {
//   try {
//     const chainResponse = await fetch("http://127.0.0.1:5000/chain");
//     const chainData = await chainResponse.json();

//     // Clear the previous chain display
//     const chainContainer = document.getElementById("chain");
//     chainContainer.innerHTML = "";

//     if (chainData.chain && chainData.chain.length > 0) {
//       const table = document.createElement("table");
//       const tableHeader = `
//               <thead>
//                   <tr>
//                       <th>Index</th>
//                       <th>Previous Hash</th>
//                       <th>Proof</th>
//                       <th>Timestamp</th>
//                       <th>Votes</th>
//                   </tr>
//               </thead>
//           `;
//       table.innerHTML = tableHeader;

//       const tableBody = document.createElement("tbody");
//       chainData.chain.forEach((block) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//                   <td>${block.index}</td>
//                   <td>${block.previous_hash}</td>
//                   <td>${block.proof}</td>
//                   <td>${new Date(block.timestamp * 1000).toLocaleString()}</td>
//                   <td>${
//                     block.votes.length > 0 ? block.votes.length : "No votes"
//                   }</td>
//               `;
//         tableBody.appendChild(row);
//       });

//       table.appendChild(tableBody);
//       chainContainer.appendChild(table);
//     } else {
//       chainContainer.innerHTML = "No blocks found in the blockchain.";
//     }
//   } catch (error) {
//     console.error("Error fetching blockchain data:", error);
//   }
// }

// // Polling to update blockchain data every 3 seconds
// setInterval(fetchBlockchainData, 3000);
document.addEventListener("DOMContentLoaded", () => {
  // Initially fetch blockchain data when the page loads
  fetchBlockchainData();

  // Handle form submission for voting
  const voteForm = document.getElementById("voteForm");
  voteForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const voterId = document.getElementById("voter_id").value;
    const candidate = document.getElementById("candidate").value;

    const voteData = {
      voter_id: voterId,
      candidate: candidate,
    };

    try {
      // Send vote data to the Flask API
      const response = await fetch("http://127.0.0.1:5000/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(voteData),
      });

      const result = await response.json();
      if (response.status === 201) {
        alert("Vote submitted successfully!");
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error submitting vote:", error);
      alert("An error occurred while submitting your vote.");
    }
  });

  // Mine block button click handler
  const mineButton = document.getElementById("mineButton");
  mineButton.addEventListener("click", async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/mine", {
        method: "GET",
      });

      const result = await response.json();
      if (response.status === 200) {
        const minedBlockContainer = document.getElementById("minedBlock");
        const minedBlock = `
                  <h3>Newly Mined Block</h3>
                  <pre>${JSON.stringify(result, null, 2)}</pre>
              `;
        minedBlockContainer.innerHTML = minedBlock;
        fetchBlockchainData(); // Refresh blockchain data after mining
      } else {
        alert("Error mining block");
      }
    } catch (error) {
      console.error("Error mining block:", error);
      alert("An error occurred while mining a new block.");
    }
  });
});

// Fetch blockchain data and display it
async function fetchBlockchainData() {
  try {
    const chainResponse = await fetch("http://127.0.0.1:5000/chain");
    const chainData = await chainResponse.json();

    // Clear the previous chain display
    const chainContainer = document.getElementById("chain");
    chainContainer.innerHTML = "";

    if (chainData.chain && chainData.chain.length > 0) {
      const table = document.createElement("table");
      const tableHeader = `
              <thead>
                  <tr>
                      <th>Index</th>
                      <th>Previous Hash</th>
                      <th>Proof</th>
                      <th>Timestamp</th>
                      <th>Votes</th>
                  </tr>
              </thead>
          `;
      table.innerHTML = tableHeader;

      const tableBody = document.createElement("tbody");
      chainData.chain.forEach((block) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                  <td>${block.index}</td>
                  <td>${block.previous_hash}</td>
                  <td>${block.proof}</td>
                  <td>${new Date(block.timestamp * 1000).toLocaleString()}</td>
                  <td>${
                    block.votes.length > 0 ? block.votes.length : "No votes"
                  }</td>
              `;
        tableBody.appendChild(row);
      });

      table.appendChild(tableBody);
      chainContainer.appendChild(table);
    } else {
      chainContainer.innerHTML = "No blocks found in the blockchain.";
    }
  } catch (error) {
    console.error("Error fetching blockchain data:", error);
    alert("An error occurred while fetching blockchain data.");
  }
}

// Polling to update blockchain data every 3 seconds
setInterval(fetchBlockchainData, 3000);
