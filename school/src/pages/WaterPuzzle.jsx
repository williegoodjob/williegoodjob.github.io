import { useEffect, useRef } from 'react';
import './WaterPuzzle.css';

function WaterPuzzle() {
  const gameContainerRef = useRef(null);
  const levelSelectRef = useRef(null);
  const levelCountRef = useRef(null);
  const completedTubesCountRef = useRef(null);

  useEffect(() => {
    // 確保只在組件掛載時執行一次
    const gameContainer = gameContainerRef.current;
    const levelSelect = levelSelectRef.current;
    const levelCountElement = levelCountRef.current;
    const completedTubesCountElement = completedTubesCountRef.current;
    
    const colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "orange",
      "purple",
      "pink",
      "brown",
      "cyan",
      "magenta",
      "lime",
      "teal",
      "indigo",
      "violet",
      "gold",
      "silver",
      "maroon",
      "navy",
      "olive",
      "coral",
    ];
    
    const tubes = [];
    let selectedTube = null;
    let levelCount = 1;

    function chooseLevel(level) {
      levelCount = level;
      levelCountElement.textContent = levelCount;
    }

    levelSelect.addEventListener("change", (event) => {
      const selectedLevel = parseInt(event.target.value, 10);
      chooseLevel(selectedLevel);
    });

    function checkGameState() {
      const allSameColor = (tube) => {
        const waters = Array.from(tube.children);
        return (
          waters.length === 4 &&
          waters.every(
            (water) =>
              water.style.backgroundColor === waters[0].style.backgroundColor
          )
        );
      };

      let completedTubes = 0;
      tubes.forEach((tube) => {
        if (allSameColor(tube)) {
          completedTubes++;
        }
      });
      completedTubesCountElement.textContent = completedTubes;

      if (tubes.every((tube) => tube.childElementCount === 0 || allSameColor(tube))) {
        if (levelCount === 10) {
          alert("恭喜!你已經完成所有挑戰!!");
        } else {
          alert("你已經完成本關卡!");
          levelCount++;
          levelCountElement.textContent = levelCount;
          completedTubesCountElement.textContent = 0;
          chooseLevel(levelCount);
          createTubes();
          fillTubes();
        }
      }
    }

    function pourWater(fromTube, toTube) {
      let fromWater = fromTube.querySelector(".water:last-child");
      let toWater = toTube.querySelector(".water:last-child");

      if (!toWater) {
        const color = fromWater ? fromWater.style.backgroundColor : null;
        while (
          fromWater &&
          fromWater.style.backgroundColor === color &&
          toTube.childElementCount < 4
        ) {
          toTube.appendChild(fromWater);
          fromWater = fromTube.querySelector(".water:last-child");
        }
      } else {
        while (
          fromWater &&
          fromWater.style.backgroundColor === toWater.style.backgroundColor &&
          toTube.childElementCount < 4
        ) {
          toTube.appendChild(fromWater);
          fromWater = fromTube.querySelector(".water:last-child");
          toWater = toTube.querySelector(".water:last-child");
        }
      }
      checkGameState();
    }

    function selectTube(tube) {
      if (selectedTube) {
        if (selectedTube !== tube) {
          pourWater(selectedTube, tube);
        }
        selectedTube.classList.remove("selected");
        selectedTube = null;
      } else {
        selectedTube = tube;
        tube.classList.add("selected");
      }
    }

    function createTubes() {
      gameContainer.innerHTML = "";
      tubes.length = 0;

      for (let i = 0; i < levelCount + 1; i++) {
        const tube = document.createElement("div");
        tube.classList.add("tube");
        tube.addEventListener("click", () => selectTube(tube));
        gameContainer.appendChild(tube);
        tubes.push(tube);
      }

      for (let i = 0; i < 2; i++) {
        const emptyTube = document.createElement("div");
        emptyTube.classList.add("tube");
        emptyTube.addEventListener("click", () => selectTube(emptyTube));
        gameContainer.appendChild(emptyTube);
        tubes.push(emptyTube);
      }
    }

    function fillTubes() {
      const gameColors = colors.slice(0, Math.min(levelCount + 1, colors.length));
      const waterBlocks = [];

      gameColors.forEach((color) => {
        for (let i = 0; i < 4; i++) {
          waterBlocks.push(color);
        }
      });

      waterBlocks.sort(() => 0.5 - Math.random());

      let blockIndex = 0;
      tubes.slice(0, levelCount + 1).forEach((tube) => {
        for (let i = 0; i < 4; i++) {
          if (blockIndex < waterBlocks.length) {
            const water = document.createElement("div");
            water.classList.add("water");
            water.style.backgroundColor = waterBlocks[blockIndex];
            water.style.height = "20%";
            tube.appendChild(water);
            blockIndex++;
          }
        }
      });
    }

    // 初始化遊戲
    function initializeGame() {
      tubes.length = 0;
      createTubes();
      fillTubes();
    }

    // 添加事件監聽，清理函數會在組件卸載時清理這些事件監聽
    const playButton = document.getElementById("play-button");
    playButton.addEventListener("click", initializeGame);

    // 初始化遊戲
    initializeGame();

    // 組件卸載時清理事件監聽
    return () => {
      playButton.removeEventListener("click", initializeGame);
      if (levelSelect) {
        levelSelect.removeEventListener("change", chooseLevel);
      }
    };
  }, []); // 空依賴陣列確保只執行一次

  return (
    <div className="water-puzzle-container">
      <h1>2025 Water Puzzle Game</h1>
      <div id="game-info" className="game-area">
        <p>關卡：<span id="level-count" ref={levelCountRef}>1</span></p>
        <p>完成的試管：<span id="completed-tubes-count" ref={completedTubesCountRef}>0</span></p>
      </div>
      <div id="controls" className="game-area">
        <label htmlFor="level-select">選擇關卡</label>
        <select id="level-select" ref={levelSelectRef}>
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          <option value="3">Level 3</option>
          <option value="4">Level 4</option>
          <option value="5">Level 5</option>
          <option value="6">Level 6</option>
          <option value="7">Level 7</option>
          <option value="8">Level 8</option>
          <option value="9">Level 9</option>
          <option value="10">Level 10</option>
        </select>
        <button id="play-button">PLAY</button>
      </div>
      <div id="game-container" ref={gameContainerRef} className="game-area"></div>
    </div>
  );
}

export default WaterPuzzle;
