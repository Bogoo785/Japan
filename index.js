  // 設定預計出發日期 (請將這行改成您實際的出發日期，格式為：YYYY-MM-DD)
        const targetDate = new Date("2026-10-05T15:30:00").getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                document.getElementById("timer").innerHTML = "我們出發囉！✈️";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("timer").innerHTML = `${days} 天 ${hours} 時 ${minutes} 分 ${seconds} 秒`;
        }

        // 每秒更新倒數計時
        setInterval(updateCountdown, 1000);
        // 初始化載入
        updateCountdown();