import { defineComponent } from 'vue'
import { NAvatar, NText, NFlex, NButton, NSwitch, NIcon, NScrollbar, NPopselect, NRate, NEllipsis } from 'naive-ui'
import { SwapHorizontal } from '@vicons/ionicons5'
import { RenderIcon, IconReport, IconComputer, IconTongjishuju, IconGerenziliao, IconQianbao, IconZhanghushezhi, IconHuiyuanquanyi, IconZhuxiao, IconTubiao, IconQiehuan } from '@/components'
import avatarUrl from '../../assets/img/avatar.png'
import './notice.scss'
import { useRouter } from 'vue-router'

export const Notice = defineComponent({
  setup() {
	const router = useRouter()
	const msgList = [
		{
			title:'恭喜您，已成功发送offer，谢谢',
			url:'',
			date:'昨天 14:40'
		},
		{
			title:'恭喜您 XXX，您发布的项目已审核通过，请在“生效的工作”查看更多详情',
			url:'',
			date:'昨天 14:40'
		},
		{
			title:'您的头像已生效，请在个人详情页查看',
			url:'',
			date:'昨天 14:40'
		},
		{
			title:'您的头像审核未通过，请在个人详情页重新上传，谢谢',
			url:'',
			date:'昨天 14:40'
		},
		{
			title:'成功发送项目邀请简历',
			url:'',
			date:'昨天 14:40'
		},
	]
	const onClickMsg = (item: string) => {
	   if(item.url){
		   router.push(item.url)
	   }
	};
    return {onClickMsg,msgList}
  },

  render() {
    return <NScrollbar style="max-height: 277px;"><div class="notice-container">
      {
        this.msgList.map((_, i) => {
          return <div class="notice-container-item"  onClick={()=>this.onClickMsg(_)}>
            <div class="notice-header">{_.title}</div>
            <div class="notice-header-date">
              {_.date}
            </div>
          </div>
        })
      }
    </div></NScrollbar>
  },
})

export function renderCustomHeader() {
  const router = useRouter()
  const onlineStatus = ref('在线')
  return h(
    'div',
    {
      style: 'display: flex; align-items: center;justify-content: space-between;padding: 30px 20px 20px 20px;',
    },
    [
      h(NAvatar, {
        round: true,
        src: avatarUrl,
        size: 40,
      	style:'cursor:pointer'
      }),
      h('div', null, [
        h('div', null, [
            h(
              'div',
              {
				style: {
					fontSize: '16px',
					maxWidth: '100px',
					overflow: 'hidden',
					whiteSpace: 'nowrap',
					textOverflow: 'ellipsis',
				}
			  },
              { default: () => '乔安娜乔安娜乔安娜乔安娜乔安娜乔安娜' },
            ),
          ],
        ),
        h('div',
          { style: 'font-size: 10px;color:#808080;margin-top:5px' },
          [
            h(
              NText,
              { depth: 3 },
              { default: () => '设计师' },
            ),
          ],
        ),
      ]),
	  h(NPopselect,{
	  		options: [
	  		  {
	  			label: '在线',
	  			value: '在线'
	  		  },
	  		  {
	  			label: '忙绿',
	  			value: '忙绿'
	  		  },
	  		  {
	  			label: '离线',
	  			value: '离线'
	  		  },
	  		],
	  		'onUpdate:value': (value) => {
	  			onlineStatus.value = value
	  		},
	  },[
		  h(NButton, {
			round: true,
				type:'primary',
				size:'small'
		  },{
			default: () => onlineStatus.value,
		  })
	  ]),
    ],
  )
}

export const renderCustomIcons = defineComponent({
  setup() {
	const router = useRouter()
	const themeValue = ref('普通')
	const themeOptions = [
        {
          label: '普通',
          value: '普通'
        },
        {
          label: '黑暗',
          value: '黑暗'
        },
        {
          label: '跟随系统切换',
          value: '跟随系统切换'
        },
	]
	const onClickLogout = () => {
	  router.push('/login')
	};
	const handleChange = (value: boolean) => {
	  console.log(value);
	};
	const themeUpdate = (value: string) => {
	  themeValue.value = value
	};
    return {onClickLogout, handleChange, themeValue, themeOptions, themeUpdate}
  },
  render() {
    return <div class="CustomIcons">
      <NFlex justify="space-between" class="CustomIcons-item">
        极速匹配
        <div>
          <NSwitch size="small" defaultValue={true} on-update:value={this.handleChange}></NSwitch>
        </div>
      </NFlex>
	
	  <NFlex alignItems="center" class="CustomIcons-item showChangeAccount" size={5}>
		<RenderIcon icon={IconQiehuan} size={16} fill="#808080"></RenderIcon>
		切换账户
	  </NFlex>
	  <RouterLink to="/client/member-contact">
		  <NFlex alignItems="center" class="CustomIcons-item" size={5}>
			<RenderIcon icon={IconGerenziliao} size={16} fill="#808080"></RenderIcon>
			个人资料
		  </NFlex>
	  </RouterLink>
	  <RouterLink to="/client/member-statistics">
		  <NFlex alignItems="center" class="CustomIcons-item" size={5}>
			<RenderIcon icon={IconTongjishuju} size={16} fill="#808080"></RenderIcon>
			统计数据和趋势
		  </NFlex>
	  </RouterLink>
	  <NFlex alignItems="center" class="CustomIcons-item" size={5} style={{ margin: '5px 0' }}>
	    <NRate readonly default-value="5" /> 5
	  </NFlex>
	  <RouterLink to="/client/wallet">
		  <NFlex alignItems="center" class="CustomIcons-item" size={5}>
			<RenderIcon icon={IconQianbao} size={16} fill="#808080"></RenderIcon>
			钱包
		  </NFlex>
	  </RouterLink>
	  <RouterLink to="/client/member-withdrawal">
		  <NFlex alignItems="center" class="CustomIcons-item" size={5}>
			<RenderIcon icon={IconZhanghushezhi} size={16} fill="#808080"></RenderIcon>
			账户设置
		  </NFlex>
	  </RouterLink>
	  <NPopselect value={this.themeValue} options={this.themeOptions} on-update:value={this.themeUpdate} trigger="click">
		  <NFlex alignItems="center" class="CustomIcons-item" size={5} style={{ marginBottom: '15px' }}>
			<RenderIcon icon={IconTubiao} size={16} fill="#808080"></RenderIcon>
			主题颜色：{this.themeValue}
			<NIcon size={16} fill="#808080" style="margin-left:auto">
			  <SwapHorizontal></SwapHorizontal>
			</NIcon>
		  </NFlex>
	  </NPopselect>
	 <NFlex alignItems="center" class="CustomIcons-item" size={5} style={{ marginBottom: '15px' }} onClick={()=>this.onClickLogout()}>
	   <RenderIcon icon={IconZhuxiao} size={16} fill="#808080"></RenderIcon>
	   注销
	 </NFlex>
    </div>
  },
})