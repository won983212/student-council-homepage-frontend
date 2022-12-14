import Block from 'components/global/Block';
import styled from 'styled-components';

import seungYongImg from 'static/images/makers-profile-pics/seung-yong.png';
import hoYeonImg from 'static/images/makers-profile-pics/ho-yeon.png';
import yeJiImg from 'static/images/makers-profile-pics/ye-ji.png';
import chanJinImg from 'static/images/makers-profile-pics/chan-jin.png';
import yeonJuImg from 'static/images/makers-profile-pics/yeon-ju.png';
import leeHyeon from 'static/images/makers-profile-pics/lee-hyeon.png';
import seungHwan from 'static/images/makers-profile-pics/seung-hwan.png';
import yuJin from 'static/images/makers-profile-pics/yu-jin.png';

import Card from './Card';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SeungYongPics = styled.img.attrs({ src: seungYongImg })`
  position: absolute;
  width: 400px;
  transform: scale(-1.5, 1.5);
  top: -50px;
  left: 30px;
  pointer-events: none;
`;

const HoYeonPics = styled.img.attrs({ src: hoYeonImg })`
  position: absolute;
  width: 400px;
  transform: scale(0.75);
  top: -100px;
  left: -50px;
  pointer-events: none;
`;

const YeJiPics = styled.img.attrs({ src: yeJiImg })`
  position: absolute;
  width: 400px;
  transform: scale(1.33);
  top: -140px;
  left: -90px;
  pointer-events: none;
`;

const ChanJinPics = styled.img.attrs({ src: chanJinImg })`
  position: absolute;
  width: 400px;
  transform: scale(0.55);
  top: -140px;
  left: -55px;
  pointer-events: none;
`;

const YeonJuPics = styled.img.attrs({ src: yeonJuImg })`
  position: absolute;
  width: 400px;
  transform: scale(0.5);
  top: -170px;
  left: -50px;
  pointer-events: none;
`;

const LeeHyeonPics = styled.img.attrs({ src: leeHyeon })`
  position: absolute;
  width: 400px;
  transform: scale(0.66);
  top: -270px;
  left: -55px;
  pointer-events: none;
`;

const SeungHwanPics = styled.img.attrs({ src: seungHwan })`
  position: absolute;
  width: 400px;
  transform: scale(0.66);
  top: -180px;
  left: -80px;
  pointer-events: none;
`;

const YuJinPics = styled.img.attrs({ src: yuJin })`
  position: absolute;
  width: 400px;
  transform: scale(0.7);
  top: -50px;
  left: -60px;
  pointer-events: none;
`;

function Makers(): JSX.Element {
  return (
    <Wrapper>
      <Block
        title="?????? ?????????"
        contents={
          <div>
            <Card
              bgFromColor="#192a56"
              bgToColor="#273c75"
              name="?????????"
              info="????????????????????? 19??????"
              pjrole="Project Manager"
              img={<ChanJinPics />}
              teamleader
            />
            <Card
              bgFromColor="#434449"
              bgToColor="#4E505A"
              name="?????????"
              info="?????????????????? 18??????"
              pjrole="Frontend Development Team Leader"
              ghid="ho991217"
              instaid="it.s_ho"
              img={<HoYeonPics />}
              teamleader
            />
            <Card
              bgFromColor="#434449"
              bgToColor="#4E505A"
              name="?????????"
              info="????????????????????? 19??????"
              pjrole="Frontend Development"
              img={<YeonJuPics />}
            />
            <Card
              bgFromColor="#434449"
              bgToColor="#4E505A"
              name="?????????"
              info="????????????????????? 20??????"
              pjrole="Frontend Development"
              ghid="sujeong11"
            />
            <Card
              bgFromColor="#353b2d"
              bgToColor="#5d674f"
              name="?????????"
              info="????????????????????? 17??????"
              pjrole="Backend Development Team Leader"
              ghid="SeungYongChoi"
              img={<SeungYongPics />}
              teamleader
            />
            <Card
              bgFromColor="#353b2d"
              bgToColor="#5d674f"
              name="??? ???"
              info="???????????????????????? 17??????"
              pjrole="Backend Development"
              img={<LeeHyeonPics />}
            />
            <Card
              bgFromColor="#353b2d"
              bgToColor="#5d674f"
              name="?????????"
              pjrole="Backend Development"
              img={<SeungHwanPics />}
              otherUniv="???????????????"
            />
            <Card
              bgFromColor="#2E4A66"
              bgToColor="#7B97B4"
              name="?????????"
              info="?????????????????????????????? 18??????"
              pjrole="UX/UI Design Team Leader"
              img={<YeJiPics />}
              teamleader
            />
            <Card
              bgFromColor="#2E4A66"
              bgToColor="#7B97B4"
              name="?????????"
              pjrole="UX/UI Design"
            />
            <Card
              bgFromColor="#2E4A66"
              bgToColor="#7B97B4"
              name="??? ???"
              info="?????????????????????????????? 20??????"
              img={<YuJinPics />}
              pjrole="UX/UI Design"
              instaid="Cherish_Jin88"
            />
          </div>
        }
      />
    </Wrapper>
  );
}

export default Makers;
