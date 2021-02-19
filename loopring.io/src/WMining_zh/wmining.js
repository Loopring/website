import React, {useEffect} from 'react';
import styled from 'styled-components';
import Navigation from '../Wallet_zh/Navigation';
import FooterSection from '../Wallet_zh/FooterSection';
import AOS from 'aos';
import HeroSection from './HeroSection';
import HowToStep from './HowToStep';
import RulesSection from './RulesSection';

const WMiningPage = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navigation />
      {/* <HeroSection />*/}
      <RulesSection />
      <HowToStep
        titles={[
          '使用手机或邮箱号注册。',
          '若手机用户未收到验证码，可能是屏蔽了第三方服务。',
          '若没有邀请人，可以跳过。',
          '为您的合包取名（ENS）其他以太坊钱包转账可以直接填写ENS名称。',
          '短名称（4-6位）需付费创建，终生使用无需续费。',
          '同时，如果您需要，也可以找到一个心仪的靓号地址（这是其他钱包没有的服务）。',
          '选择三种Token中的任何一种进行支付。',
          '出现二维码后，使用任意以太坊钱包转账或从中心化交易所提币即可，可以高于提示数量，不会多扣除。',
          '支付后可点击省略号图标，选择“已支付”。',
          '若确认支付，提示栏将显示进度，创建智能钱包可能需要多一点时间，请耐心等待。',
          '点击橙色卡片中的“免费激活”，将开通路印二层高速账号。',
          '最后从中心化交易所提币至钱包地址即可。',
        ]}
      />
      <FooterSection />
    </>
  );
};

export default WMiningPage;
