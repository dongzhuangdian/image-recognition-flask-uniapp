<view><view data-ref="imgs" class="{{['content vue-ref',(imgSrc=='')?'ybgs':'']}}" style="{{'background-image:'+('url('+imgBg+')')+';'}}"><image class="logo" src="{{imgSrc}}"></image></view><helang-compress class="vue-ref" vue-id="da7a9a64-1" data-ref="helangCompress" bind:__l="__l"></helang-compress><button style="width:70%;margin-left:15%;" type="primary" data-event-opts="{{[['tap',[['upBg']]]]}}" bindtap="__e">上传背景图片</button><button style="{{'width:70%;margin-left:15%;'+('background-color:'+(color)+';')}}" type="primary" disabled="{{imgBg!=''}}" data-event-opts="{{[['tap',[['open']]]]}}" bindtap="__e">选择背景颜色</button><button style="width:70%;margin-left:15%;" type="primary" data-event-opts="{{[['tap',[['upfile']]]]}}" bindtap="__e">上传人物图片合成</button><button style="width:70%;margin-left:15%;" type="warn" data-event-opts="{{[['tap',[['qkym']]]]}}" bindtap="__e">清空</button><t-color-picker class="vue-ref" bind:confirm="__e" vue-id="da7a9a64-2" data-ref="colorPickers" data-event-opts="{{[['^confirm',[['confirm']]]]}}" bind:__l="__l"></t-color-picker><button style="width:70%;margin-left:15%;" type="primary" disabled="{{isSave}}" data-event-opts="{{[['tap',[['downF',[1]]]]]}}" bindtap="__e">保存单人物图</button><button style="width:70%;margin-left:15%;" type="primary" disabled="{{isSave}}" data-event-opts="{{[['tap',[['downF',[2]]]]]}}" bindtap="__e">保存图片</button><view><progress percent="{{progressData}}" active="active" duration="5" active-mode="forwards"></progress><block qq:if="{{isJd}}"><button style="float:right;font-size:15rpx;margin:0;border:0;padding:0;outline:none;color:#000000;background-color:white;" type="default" disabled="true" loading="true">{{jd}}</button></block></view><canvas style="{{'width:100%;'+('height:'+(caheight+'px')+';')}}" canvas-id="ones" id="ones"></canvas></view>