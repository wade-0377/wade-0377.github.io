window.addEventListener('load', function () {
    // 导航栏模块
    var header = document.querySelector('.header');
    var clear = header.querySelector('.clear');
    var lis = clear.querySelector('.lis');
    var ul = lis.querySelector('ul');
    lis.addEventListener('mouseover', function () {
        ul.style.display = 'block';
    })
    lis.addEventListener('mouseout', function () {
        ul.style.display = 'none';
    })
    // 轮播区域模块
    var arrowl = document.querySelector('.arrow-l');
    var arrowr = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var content = focus.querySelector('.content');
    // var lis = content.children[0].cloneNode(true);
    // content.appendChild(lis); 
    // 下一项轮播
    var contentWidth = content.offsetWidth;
    // console.log(contentWidth);
    var num = 0;
    var flag = true;
    arrowr.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 3) {
                content.style.left = 0;
                //同时num赋值为0,图片就可以重新开始滚动了
                num = 0;
            }
            num++;
            animate(content, -num * contentWidth, function () {
                flag = true;
            });
        }
    })
    arrowl.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                //同时num赋值为content.children.length-1;,图片就可以重新开始滚动了
                num = content.children.length - 1;
                //移动的距离就是从第五张不做动画的跑到第一张的距离-num *contentWidth ;
                content.style.left = -num * contentWidth + 'px';
            }
            num--;
            animate(content, -num * contentWidth, function () {
                flag = true;
            });
        }
    })
    //自动播放轮播图,开启定时器
    var timer = setInterval(function () {
        //手动调用点击事件
        arrowr.click();
    }, 3000)
    // 返回顶部侧边栏
    var fixright = document.querySelector('.fixright');
    
    var goBack =fixright .querySelector('.goBack');
    var main = document.querySelector('.main ');
    var nav = document.querySelector('.nav');
    document.addEventListener('scroll', function () {
        var navTop = nav.offsetTop;
        console.log(navTop);
        if (window.pageYOffset >= navTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    })
    //给span添加返回顶部缓动动画效果
    goBack.addEventListener('click', function () {
        window.scroll(0, 0);
        //  animate(window,0);
    });
    //     function animate(obj, target, callback) {
    //     clearInterval(obj.timer);
    //     obj.timer = setInterval(function() {
    //         var step = (target - window.pageYOffset) / 10;
    //         step = step > 0 ? Math.ceil(step) : Math.floor(step);
    //         if (window.pageYOffset == target) {
    //             clearInterval(obj.timer);
    //             if (callback) {
    //                 callback();
    //             }
    //         }
    //           window.scroll(0,window.pageYOffset + step);
    //     }, 10);
    // }
    // 右侧固定栏背景颜色更换
    var fixright = document.querySelector('.fixright');
    var font = fixright.querySelector('.font');
    var lis = font.querySelectorAll('li');
    // console.log(lis);
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.backgroundColor = '';

            }
            this.style.backgroundColor = '#924034';
        }
        lis[i].onmouseout = function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.backgroundColor = '';
            }
        }
    }
    //底部导航栏
    var link_list = document.querySelector('.link-list');
    var divs = link_list.querySelectorAll('div');
    var f_house = document.querySelector('.f_house');
    var house = f_house.querySelector('.house');
    var span = house.querySelectorAll('span');
    console.log(span);
    for (var i = 0; i < span.length; i++) {
        span[i].setAttribute('index', i);
        span[i].onmouseover = function () {
            for (var i = 0; i < span.length; i++) {
                span[i].style.backgroundColor = '';
            }
            this.style.backgroundColor = '#394043';

            var index = this.getAttribute('index');
            console.log(index);
            // 干掉所有人 让其余的 这些div 隐藏
            for (var i = 0; i < divs.length; i++) {
                divs[i].style.display = 'none';
            }
            // 留下我自己 让对应的div显示出来
            divs[index].style.display = 'block';
        }
    }
    // // 搜索框上方三角移动
    var headerwrap = document.querySelector('.header_wrap');
    var input_s = headerwrap.querySelector('.input_s');
    var liss = input_s.querySelectorAll('li');
    var search = headerwrap.querySelector('.search');
    var triangle = search.querySelector('.triangle');
    var current = 19;
    for (var i = 0; i < liss.length; i++) {
        liss[i].addEventListener('click', function () {
            animate(triangle, this.offsetLeft);
        });
        //点击谁就把谁作为起始位置
        liss[i].addEventListener('click', function () {
            current = this.offsetLeft;
        });
    }
    // 登陆页面关闭制作
    var login = document.querySelector('.login');
    var register = document.querySelector('.register');
    var login_title = login.querySelector('.login-title');
    var register_title = register.querySelector('.register-title');
    var close = login_title.querySelector('.close');
    var closes = register_title.querySelector('.closes');
    var jionin = document.querySelector('.jionin');
    var jion = jionin.querySelector('.jion');
    var jion1 = jion.querySelector('.jion1');
    var jion2 = jionin.querySelector('.jion2');
    var goLogin = register.querySelector('.goLogin');
    jion1.addEventListener('click', function () {
        login.style.display = 'block'
        register.style.display = 'none'
    })
    close.addEventListener('click', function () {
        login.style.display = 'none'
    })
    jion2.addEventListener('click', function () {
        register.style.display = 'block'
    })
    closes.addEventListener('click', function () {
        register.style.display = 'none'
    })
    goLogin.addEventListener('click', function () {
        login.style.display = 'block'
        register.style.display = 'none'
    })
    // 背景跟随鼠标移动
    // var header = document.querySelector('.header');
    // window.onmousemove = function(e){
    //     var x = e.clientX/5;
    //     var y = e.clientY/5;
    //     header.style.backgroundPositionX = x + 'px';
    //     header.style.backgroundPositionY = y + 'px';
    // }
})