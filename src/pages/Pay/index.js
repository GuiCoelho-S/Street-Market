import { Container, Main } from "../../components/Container";
import { useContext, useState } from "react";
import { DataItemContext } from "../../context/useDataItem";
import { Button } from "../../components/Button";
import { motion } from "framer-motion";
import Netlify from "../../assets/images/netlify_logo.png";
import { ReactComponent as GitHubIcon } from "../../assets/icons/gitHub_icon.svg";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { useHistory } from 'react-router-dom';

import * as S from "./style";

const Pay = () => {

  const history = useHistory();  

  const { totalValue } = useContext(DataItemContext);
  var value = totalValue.toFixed(2);

  const [finalValue, setFinalValue] = useState();
  const [active, setActive] = useState(false);

  return (
    <Container>
      {active ? (
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <S.Final>
            <h2>I hope that you had enjoyed it 😉</h2>
            <p>If you wanna see other projects:</p>
            <S.Link
              href="https://app.netlify.com/teams/guicoelho-s/sites"
              target="_blank"
              rel="noreferrer"
            >
              <S.ImageNetlify src={Netlify} />
            </S.Link>
            <p>If you wanna see my repositories:</p>

            <S.Icon
              href="https://github.com/GuiCoelho-S?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </S.Icon>
            <Button
              primary
              onClick={() => {
                setActive(!active);
              }}
            >
              <ArrowBackIcon />
            </Button>
          </S.Final>
        </motion.div>
      ) : (
        <Main>
          <S.PayMethod>
            <h1>Select the pay method:</h1>
            <select
              name="Pay-method"
              onChange={(e) => {
                if (e.target.value === "1") {
                  setFinalValue(value * 1.2);
                }
                if (e.target.value === "2") {
                  setFinalValue(value * 1.4);
                }
                if (e.target.value === "3") {
                  setFinalValue(value);
                }

                return finalValue;
              }}
            >
              <option value="0">Select the method</option>
              <option value="1">Credit Card</option>
              <option value="2">Automatic payment online</option>
              <option value="3">PIX</option>
            </select>
            <S.FinalValue>
              <p>Final Value: </p>
              <div>
                {finalValue} <span>US$</span>
              </div>
            </S.FinalValue>
            <Button
              primary
              onClick={() => {
                setActive(!active);
              }}
            >
              Pay
            </Button>
            <S.BackButton
              onClick={() => {
                history.push("/items");
              }}
            >
              <ArrowBackIcon />
            </S.BackButton>
          </S.PayMethod>
        </Main>
      )}
    </Container>
  );
};
export default Pay;
