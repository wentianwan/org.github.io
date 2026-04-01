// 团队成员数据
const teamMembers = [
    {
        id: 1,
        name: "张伟",
        role: "创始人兼CEO",
        category: "management",
        bio: "10年行业经验，曾任职于多家知名企业，专注于战略规划与业务发展。",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        social: {
            weixin: "#",
            linkedin: "#",
            github: "#"
        }
    },
    {
        id: 2,
        name: "李娜",
        role: "首席设计师",
        category: "design",
        bio: "8年用户体验设计经验，擅长创造直观且美观的用户界面。",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        social: {
            weixin: "#",
            dribbble: "#",
            behance: "#"
        }
    },
    {
        id: 3,
        name: "王强",
        role: "技术总监",
        category: "development",
        bio: "全栈开发工程师，精通多种编程语言，热爱开源项目。",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        social: {
            weixin: "#",
            github: "#",
            twitter: "#"
        }
    },
    {
        id: 4,
        name: "刘敏",
        role: "市场总监",
        category: "marketing",
        bio: "对数字营销有丰富经验，善于制定有效的营销策略。",
        image: "https://randomuser.me/api/portraits/women/29.jpg",
        social: {
            weixin: "#",
            linkedin: "#",
            weibo: "#"
        }
    },
    {
        id: 5,
        name: "陈明",
        role: "后端开发",
        category: "development",
        bio: "专注于高性能服务器架构，熟悉分布式系统和云计算。",
        image: "https://randomuser.me/api/portraits/men/42.jpg",
        social: {
            weixin: "#",
            github: "#",
            stackoverflow: "#"
        }
    },
    {
        id: 6,
        name: "赵琳",
        role: "UI设计师",
        category: "design",
        bio: "热爱创造视觉体验，擅长移动端应用界面设计。",
        image: "https://randomuser.me/api/portraits/women/56.jpg",
        social: {
            weixin: "#",
            dribbble: "#",
            instagram: "#"
        }
    },
    {
        id: 7,
        name: "杨帆",
        role: "产品经理",
        category: "management",
        bio: "具有敏锐的市场洞察力，善于将用户需求转化为产品功能。",
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        social: {
            weixin: "#",
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        id: 8,
        name: "周月",
        role: "内容营销",
        category: "marketing",
        bio: "创意写作专家，擅长讲述品牌故事和内容策略。",
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        social: {
            weixin: "#",
            medium: "#",
            linkedin: "#"
        }
    }
];

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化星空背景
    initStarBackground();
    
    // 初始化文字随机效果
    initTextScramble();
    
    // 初始化团队成员展示
    displayTeamMembers('all');
    
    // 初始化滚动动画
    initScrollAnimation();
    
    // 初始化统计数字动画
    initCounterAnimation();
    
    // 初始化鼠标跟随效果
    initCursorEffect();
    
    // 筛选按钮事件绑定
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            displayTeamMembers(filter);
            
            // 更新激活状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// 初始化星空背景
function initStarBackground() {
    // 为三种大小的星星生成阴影
    const generateStars = (count, size) => {
        let result = '';
        for (let i = 0; i < count; i++) {
            const x = Math.floor(Math.random() * window.innerWidth);
            const y = Math.floor(Math.random() * window.innerHeight);
            result += `${x}px ${y}px var(--star-color)${i < count-1 ? ',' : ''}`;
        }
        return result;
    };

    // 设置星星CSS变量
    document.documentElement.style.setProperty('--star-shadows-1', generateStars(700, 1));
    document.documentElement.style.setProperty('--star-shadows-2', generateStars(200, 2));
    document.documentElement.style.setProperty('--star-shadows-3', generateStars(100, 3));
    
    // 添加星空扰动效果
    const starsContainer = document.getElementById('stars-container');
    
    window.addEventListener('mousemove', e => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // 星星背景移动效果
        starsContainer.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        
        // 云朵跟随鼠标移动效果 - 使用更复杂的变换实现随机形状变化
        document.querySelectorAll('.cloud').forEach((cloud, index) => {
            const speed = 5 + (index * 3);
            const xMove = x * speed;
            const yMove = y * speed;
            const baseRotation = index * 10 - 15; // 基础旋转角度
            const rotateAmount = x * 5; // 鼠标移动引起的旋转
            const scaleBase = 1 + (index * 0.1); // 基础大小
            const scaleAmount = 0.05 + (index * 0.02); // 缩放变化量
            
            // 复杂变换：移动+旋转+缩放
            cloud.style.transform = `
                translate(${xMove}px, ${yMove}px) 
                rotate(${baseRotation + rotateAmount}deg) 
                scale(${scaleBase + (x * scaleAmount)})
            `;
        });
    });
    
    // 创建流星效果
    createMeteors();
    
    // 云朵随机变形动画
    animateClouds();
}

// 添加云朵随机变形动画
function animateClouds() {
    const clouds = document.querySelectorAll('.cloud');
    
    clouds.forEach((cloud, index) => {
        // 每个云朵有不同的动画周期
        const animationDuration = 15000 + (index * 5000);
        
        setInterval(() => {
            // 随机生成云朵的形状变化参数
            const beforeWidth = 80 + Math.random() * 60;
            const beforeHeight = 80 + Math.random() * 60;
            const beforeTop = -20 + Math.random() * 40;
            const beforeLeft = 30 + Math.random() * 60;
            
            const afterWidth = 80 + Math.random() * 60;
            const afterHeight = 80 + Math.random() * 60;
            const afterTop = -30 + Math.random() * 40;
            const afterLeft = 90 + Math.random() * 80;
            
            // 应用随机生成的形状
            const style = document.createElement('style');
            style.textContent = `
                .cloud${index+1}::before {
                    width: ${beforeWidth}px;
                    height: ${beforeHeight}px;
                    top: ${beforeTop}px;
                    left: ${beforeLeft}px;
                    transition: all ${animationDuration/1000}s ease-in-out;
                }
                .cloud${index+1}::after {
                    width: ${afterWidth}px;
                    height: ${afterHeight}px;
                    top: ${afterTop}px;
                    left: ${afterLeft}px;
                    transition: all ${animationDuration/1000}s ease-in-out;
                }
            `;
            
            // 移除旧样式，添加新样式
            const oldStyle = document.querySelector(`#cloud-style-${index}`);
            if (oldStyle) {
                oldStyle.remove();
            }
            style.id = `cloud-style-${index}`;
            document.head.appendChild(style);
            
        }, animationDuration);
    });
}

// 流星效果
function createMeteors() {
    const meteorsContainer = document.getElementById('meteors-container');
    
    // 每隔一段随机时间创建一个流星
    setInterval(() => {
        if (!document.hidden) { // 只在页面可见时创建流星
            const meteor = document.createElement('div');
            meteor.classList.add('meteor');
            
            // 随机位置和角度
            const startX = Math.random() * window.innerWidth;
            const angle = Math.random() * 45 + 15; // 15-60度角
            
            meteor.style.left = `${startX}px`;
            meteor.style.top = '0';
            meteor.style.transform = `rotate(${angle}deg)`;
            
            meteorsContainer.appendChild(meteor);
            
            // 动画结束后移除流星元素
            setTimeout(() => {
                meteor.remove();
            }, 1000);
        }
    }, Math.random() * 3000 + 2000); // 2-5秒间隔
}

// 初始化文字随机效果
function initTextScramble() {
    const phrases = ['团队', '创新', '专业', '梦想', '未来'];
    const scrambleText = document.querySelector('.scramble-text');
    let currentIndex = 0;
    
    // 文字随机化效果
    const scramble = (text, finalText) => {
        const chars = '!<>-_\\/[]{}—=+*^?#________';
        let iteration = 0;
        let output = '';
        const interval = setInterval(() => {
            output = '';
            for (let i = 0; i < finalText.length; i++) {
                const isFinalized = iteration >= i;
                output += isFinalized ? finalText[i] : chars[Math.floor(Math.random() * chars.length)];
            }
            
            scrambleText.textContent = output;
            scrambleText.setAttribute('data-text', output);
            
            if (iteration >= finalText.length) {
                clearInterval(interval);
                
                // 延迟后切换至下一个词
                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % phrases.length;
                    scramble('', phrases[currentIndex]);
                }, 2000);
            }
            
            iteration += 1/3;
        }, 30);
    };
    
    // 启动文字随机效果
    setTimeout(() => {
        scramble('', phrases[currentIndex]);
    }, 1000);
}

// 展示团队成员
function displayTeamMembers(filter) {
    const container = document.getElementById('team-members-container');
    container.innerHTML = '';
    
    const filteredMembers = filter === 'all' 
        ? teamMembers 
        : teamMembers.filter(member => member.category === filter);
    
    filteredMembers.forEach(member => {
        const memberCard = createMemberCard(member);
        container.appendChild(memberCard);
        
        // 添加延迟显示动画效果
        setTimeout(() => {
            memberCard.classList.add('visible');
        }, 100 * filteredMembers.indexOf(member));
    });
}

// 创建成员卡片
function createMemberCard(member) {
    const card = document.createElement('div');
    card.classList.add('member-card', 'fade-in');
    card.setAttribute('data-category', member.category);
    
    // 构建社交媒体图标
    let socialIcons = '';
    for (const [platform, url] of Object.entries(member.social)) {
        let icon;
        switch(platform) {
            case 'weixin': icon = 'fa-weixin'; break;
            case 'linkedin': icon = 'fa-linkedin-in'; break;
            case 'github': icon = 'fa-github'; break;
            case 'dribbble': icon = 'fa-dribbble'; break;
            case 'behance': icon = 'fa-behance'; break;
            case 'twitter': icon = 'fa-twitter'; break;
            case 'weibo': icon = 'fa-weibo'; break;
            case 'instagram': icon = 'fa-instagram'; break;
            case 'medium': icon = 'fa-medium-m'; break;
            case 'stackoverflow': icon = 'fa-stack-overflow'; break;
            default: icon = 'fa-link';
        }
        socialIcons += `<a href="${url}" title="${platform}"><i class="fab ${icon}"></i></a>`;
    }
    
    card.innerHTML = `
        <div class="member-image">
            <img src="${member.image}" alt="${member.name}">
        </div>
        <div class="member-info">
            <h3 class="member-name">${member.name}</h3>
            <div class="member-role">${member.role}</div>
            <p>${member.bio}</p>
            <div class="member-social">
                ${socialIcons}
            </div>
        </div>
    `;
    
    return card;
}

// 初始化滚动动画
function initScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section, .fade-in').forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// 初始化统计数字动画
function initCounterAnimation() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'));
                let count = 0;
                const speed = 2000 / countTo; // 2秒内完成
                
                const timer = setInterval(() => {
                    count++;
                    target.textContent = count;
                    
                    if (count >= countTo) {
                        clearInterval(timer);
                    }
                }, speed);
                
                // 只触发一次
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => {
        observer.observe(stat);
    });
}

// 初始化鼠标跟随效果
function initCursorEffect() {
    const cursor = document.querySelector('.cursor');
    
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    document.querySelectorAll('a, button, .member-card').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.opacity = '0.5';
        });
        
        item.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.opacity = '1';
        });
    });
}
