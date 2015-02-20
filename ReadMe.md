# ReadMe
SkyTIps!支持CSS和jQuery两种调用方式，你可以根据你的（SEO）需求选择适合的调用方式。

首页演示：[SkyTips发布页](http://test.codesky.me/skytips/)

##Notice
需要配合现代浏览器使用（至少也要支持CSS3吧=w=）

##使用说明
###引入文件
如果你只想使用CSS3，只需要引入CSS文件即可(Like this)：
`<link rel="stylesheet" type="text/css" href="css/skytip.css">`

如何你想要使用jQuery，需要引入jQuery和我们的skytip.js：
`<script type="text/javascript" src="js/jquery.js"&gt;&lt;/script>`
`<script type="text/javascript" src="js/skytip.js"&gt;&lt;/script>`

###然后，调用吧！

####只使用CSS文件的情况：
首先，为需要使用skytips的文件设置（<del>虽然应该什么元素都可以，但推荐内联元素</del>，考虑到全平台支持性，使用span或div吧）`class="ontips"`，然后，在里面构建一个`span`，设定他的class为`skytip`，之后设定方向：`top``bottom``left``right`，例如
`<span class="ontips">[hover to view demo]<span class="skytip top">这就是默认样式=w=</span></span>`

需要额外样式支持的话，再后面先加个class：`custom`，然后加入样式标签（四选一）例：
`<span class="ontips">primary<span class="skytip top custom primary">Primary</span></span>`

`<span class="ontips">info<span class="skytip bottom custom info">Info</span></span>`
 
`<span class="ontips">danger<span class="skytip left custom danger">Danger</span></span>`

`<span class="ontips">warning<span class="skytip right custom warning">Warning</span></span>`

####使用jQuery的情况：
同样，为需要使用skytips的文件设置（<del>虽然应该什么元素都可以，但推荐内联元素</del>，考虑到全平台支持性，使用span或div吧）`class="ontips"`，然后在这里，我们需要用到两个属性`skytip-settings``skytip-content`

在setting中，我们写入需要的除了skytip之外的class（见CSS情况），在content中我们写入需要显示的内容
OK，然后，你应该就能看到效果啦。（不用担心SEO的加入title等标签吧，我们会做处理的=w=）

> jQuery和CSS两种方法各有利弊，诸君自行选择吧~也可以混合使用=w=