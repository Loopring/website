import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import Template from 'easy-template-string';
import styled from 'styled-components';
import Navigation from '../Wallet_zh/Navigation';
import FooterSection from '../Wallet_zh/FooterSection';
import Container from 'react-bulma-components/lib/components/container';
import './Legal.scss';

const BaseMarkdownPage = ({file}) => {
  const [markdown, updateMarkdown] = React.useState('');

  React.useEffect(function effectFunction() {
    fetch('/markdown/' + file)
        .then((response) => response.text())
        .then((content) => {
          updateMarkdown(content);
        });
  }, []);

  return (
    <div className="outerContainer">
      <Container className="legal markdown has-text-black">
        <ReactMarkdown plugins={[gfm]} children={markdown} />
      </Container>
    </div>
  );
};
const VariableMarkdownPage = ({file}) => {
  const [markdown, updateMarkdown] = React.useState('');
  React.useEffect(function effectFunction() {
    const apiPromise = fetch(
        'https://api.loopring.network/api/v3/exchange/feeInfo'
    ).then((res) => res.json());
    const markdownPromise = fetch('/markdown/' + file).then((response) =>
      response.text()
    );
    Promise.all([apiPromise, markdownPromise]).then((args) => {
      let [data, content] = args;
      let {
        ORDERBOOK_TRADING_FEES_STABLECOIN,
        ORDERBOOK_TRADING_FEES,
        AMM_TRADING_FEES,
      } = data;
      ORDERBOOK_TRADING_FEES_STABLECOIN = Object.keys(
          ORDERBOOK_TRADING_FEES_STABLECOIN
      ).reduce((pre, key) => {
        pre['ORDERBOOK_TRADING_FEES_STABLECOIN.' + key] = (
          ORDERBOOK_TRADING_FEES_STABLECOIN[key].takerRate / 100
        ).toFixed(2);
        return pre;
      }, {});
      ORDERBOOK_TRADING_FEES = Object.keys(ORDERBOOK_TRADING_FEES).reduce(
          (pre, key) => {
            pre['ORDERBOOK_TRADING_FEES.' + key] = (
              ORDERBOOK_TRADING_FEES[key].takerRate / 100
            ).toFixed(2);
            return pre;
          },
          {}
      );
      AMM_TRADING_FEES = Object.keys(AMM_TRADING_FEES).reduce((pre, key) => {
        pre['AMM_TRADING_FEES.' + key] = (
          AMM_TRADING_FEES[key].takerRate / 100
        ).toFixed(2);
        return pre;
      }, {});
      const template1 = new Template(content);
      content = template1.interpolate({
        ...ORDERBOOK_TRADING_FEES_STABLECOIN,
        ...ORDERBOOK_TRADING_FEES,
        ...AMM_TRADING_FEES,
      });
      updateMarkdown(content);
    });
  }, []);
  return (
    <div className="outerContainer">
      <Container className="legal markdown has-text-black">
        <ReactMarkdown plugins={[gfm]} children={markdown} />
      </Container>
    </div>
  );
};

const MarkdownFilePage = () => {
  let {file} = useParams();
  if (!file.endsWith('.md')) {
    file = file + '.md';
  }
  const list = [
    'wallet_fees_zh.md',
    'wallet_fees_en.md',
    'dex_fees_en.md',
    'dex_fees_zh.md',
  ];
  if (list.findIndex((f) => f === file) !== -1) {
    return <VariableMarkdownPage file={file} />;
  } else {
    return <BaseMarkdownPage file={file} />;
  }
};

const SimpleMarkdownPage = ({isChinese, name}) => {
  const file = isChinese ? name + '_zh.md' : name + '_en.md';
  return <BaseMarkdownPage file={file} />;
};

export default SimpleMarkdownPage;
export {MarkdownFilePage};
