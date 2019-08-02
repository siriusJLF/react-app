export default `<div style="color:#D4D4D4;background-color:#1E1E1E;font-family:Consolas, &quot;font-size:16px;line-height:22px;white-space:pre;">
<div>
  &nbsp; &nbsp;方式 一：
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;通过params
</div>
<div>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 1.路由表中 &nbsp; &nbsp; &nbsp;
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:#808080;">&lt;</span><span style="color:#4ec9b0;">Route</span>&nbsp;<span style="color:#9cdcfe;">path</span>=<span style="color:#ce9178;">' /user/:id '</span> &nbsp;&nbsp;<span style="color:#9cdcfe;">component</span>=<span style="color:#569cd6;">{</span><span style="color:#9cdcfe;">User</span><span style="color:#569cd6;">}</span><span style="color:#808080;">&gt;&lt;/</span><span style="color:#4ec9b0;">Route</span><span style="color:#808080;">&gt;</span>
</div>
<div>
</div>
<div>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 2.Link处 &nbsp; &nbsp; &nbsp; &nbsp;
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;HTML方式
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:#808080;">&lt;</span><span style="color:#4ec9b0;">Link</span> <span style="color:#9cdcfe;">to</span>=<span style="color:#569cd6;">{</span> <span style="color:#ce9178;">' /user/ '</span> + <span style="color:#ce9178;">' 2 '</span> <span style="color:#569cd6;">}</span>&nbsp; <span style="color:#9cdcfe;">activeClassName</span>=<span style="color:#ce9178;">'active'</span><span style="color:#808080;">&gt;</span>XXXX<span style="color:#808080;">&lt;/</span><span style="color:#4ec9b0;">Link</span><span style="color:#808080;">&gt;</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;　　　　
</div>
<div>
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;JS方式
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; this.props.history.push(&nbsp; '/user/'+'2'&nbsp; )
</div>
<div>
</div>
<div>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 3.user页面&nbsp; &nbsp; &nbsp; &nbsp;
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;通过&nbsp; this.props.params.id&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;就可以接受到传递过来的参数（id）
</div>
<div>
</div>
<div>
  &nbsp; &nbsp;方式 二：
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;通过query
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 前提：必须由其他页面跳过来，参数才会被传递过来
</div>
<div>
  　　　&nbsp; &nbsp; &nbsp;注：不需要配置路由表。路由表中的内容照常：<span style="color:#808080;">&lt;</span><span style="color:#4ec9b0;">Route</span> <span style="color:#9cdcfe;">path</span>=<span style="color:#ce9178;">'/user'</span> <span style="color:#9cdcfe;">component</span>=<span style="color:#569cd6;">{</span><span style="color:#9cdcfe;">User</span><span style="color:#569cd6;">}</span><span style="color:#808080;">&gt;&lt;/</span><span style="color:#4ec9b0;">Route</span><span style="color:#808080;">&gt;</span>
</div>
<div>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 1.Link处&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;HTML方式
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:#808080;">&lt;</span><span style="color:#4ec9b0;">Link</span> <span style="color:#9cdcfe;">to</span>=<span style="color:#569cd6;">{</span>{ <span style="color:#9cdcfe;">pathname:</span> <span style="color:#ce9178;">' /user'</span> , <span style="color:#9cdcfe;">query :</span> { <span style="color:#9cdcfe;">day:</span> <span style="color:#ce9178;">'Friday'</span> }}<span style="color:#569cd6;">}</span><span style="color:#808080;">&gt;</span>
</div>
<div>
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp;JS方式
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; this.props.history.push(<span style="color:#569cd6;">{</span> <span style="color:#9cdcfe;">pathname</span> : <span style="color:#ce9178;">'/user'</span> ,<span style="color:#9cdcfe;">query</span> : { <span style="color:#9cdcfe;">day:</span> <span style="color:#ce9178;">'Friday'</span>} <span style="color:#569cd6;">}</span>)
</div>
<div>
  &nbsp;
</div>
<div>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 2.user页面&nbsp; &nbsp; &nbsp;
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; this.props.location.query.day
</div>
<div>
  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
</div>
<div>
  &nbsp; &nbsp;&nbsp;&nbsp;方式 三：
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;通过state
</div>
<div>
  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; 同query差不多，只是属性不一样，而且state传的参数是加密的，query传的参数是公开的，在地址栏
</div>
<div>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 1.Link 处&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;HTML方式：
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:#808080;">&lt;</span><span style="color:#4ec9b0;">Link</span> <span style="color:#9cdcfe;">to</span>=<span style="color:#569cd6;">{</span>{ <span style="color:#9cdcfe;">pathname :</span> <span style="color:#ce9178;">' /user'</span> , <span style="color:#9cdcfe;">state :</span> { <span style="color:#9cdcfe;">day:</span> <span style="color:#ce9178;">'Friday'</span> }}<span style="color:#569cd6;">}</span><span style="color:#808080;">&gt;</span>&nbsp;
</div>
<div>
  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;　　
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;JS方式：
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; this.props.history.push(<span style="color:#569cd6;">{</span> <span style="color:#9cdcfe;">pathname</span>:<span style="color:#ce9178;">'/user'</span>,<span style="color:#9cdcfe;">state</span>:{<span style="color:#9cdcfe;">day&nbsp;:</span> <span style="color:#ce9178;">'Friday'</span> } <span style="color:#569cd6;">}</span>)
</div>
<div>
  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;　　 &nbsp;
</div>
<div>
  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 2.user页面&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
</div>
<div>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; this.props.location.state.day
</div>
<div>
  ---------------------
</div>
<div>
  作者：IT农工-Don
</div>
<div>
  来源：CSDN
</div>
</div>`