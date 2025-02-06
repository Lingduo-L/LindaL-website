---
layout: home
---

<!-- [Play Blackhole Game](/blackholegame.html) -->

<!-- Play Game 按钮 -->
<!-- <button id="playGameButton">Game (开发中)</button> -->

<!-- 游戏的 iframe，初始时设置为隐藏 -->
<iframe id="gameIframe" src="/blackholegame.html" frameborder="0" style="display:none; position:fixed; top:15%; left:15%; width:70%; height:70%;"></iframe>

<script>
    // 获取 Play Game 按钮和游戏的 iframe 元素
    const playGameButton = document.getElementById('playGameButton');
    const gameIframe = document.getElementById('gameIframe');

    // 为 Play Game 按钮添加点击事件监听器
    playGameButton.addEventListener('click', function() {
        // 当按钮被点击时，切换 iframe 的显示状态
        if (gameIframe.style.display === 'none') {
            gameIframe.style.display = 'block'; // 显示 iframe
        } else {
            gameIframe.style.display = 'none'; // 隐藏 iframe
        }
    });
</script>
