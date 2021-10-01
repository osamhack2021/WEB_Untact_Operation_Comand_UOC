import Modal from "components/common/Modal";
import { palette } from "lib/styles/palette";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import styled from "styled-components";

interface MeetCreateModalProps {
  onToggleModal: () => void;
  isModal: boolean;
}

const MeetCreateModal = ({ isModal, onToggleModal }: MeetCreateModalProps) => {
  return (
    <Modal
      title="회의 생성"
      buttonName="생성"
      onClick={() => console.log("나중에 생성 api나오면 그떄 ㄱ")}
      onToggleModal={onToggleModal}
      isModal={isModal}
      size="big"
    >
      <MeetCreateModalBlock>
        <div className="create-form">
          <label>제목</label>
          <input
            type="text"
            placeholder="회의 제목을 입력해주세요"
            value={"이도현 님의 회의"}
          />
        </div>

        <div className="create-form">
          <label>설명</label>
          <input type="text" placeholder="회의 설명을 입력해주세요" />
        </div>

        <div className="create-form">
          <label>회의 썸네일</label>
          <div className="img-upload">
            <label htmlFor="img-upload">
              <span>썸네일 이미지를 업로드 해주세요</span>
              <AiOutlineCloudUpload size="30" />
            </label>
            <input type="file" id="img-upload" />
          </div>
        </div>

        <div className="create-form">
          <label>회의 옵션</label>
          <div className="form-option">
            <input type="checkbox" />
            <span>회의 비밀번호</span>
            <input type="text" placeholder="비밀번호 입력" />
          </div>

          <div className="form-option">
            <input type="checkbox" />
            <span>입장 시 참가자 음소거</span>
          </div>

          <div className="form-option">
            <input type="checkbox" />
            <span>입장 시 참가자 비디오 끄기</span>
          </div>
        </div>
      </MeetCreateModalBlock>
    </Modal>
  );
};

const MeetCreateModalBlock = styled.div`
  padding: 20px 0;
  .create-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    label {
      margin-bottom: 10px;
    }
    input[type="text"] {
      height: 40px;
      border: 1px solid #d5d3d3;
      border-radius: 5px;
      outline: none;
      padding: 6px;
    }
    .form-option {
      width: 320px;
      height: 30px;
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      input[type="checkbox"] {
        margin-right: 5px;
        width: 16px;
        height: 16px;
      }
      span {
        margin-right: 10px;
        font-size: 14px;
      }
      input[type="text"] {
        height: 28px;
        width: 110px;
      }
    }
    .img-upload {
      label {
        color: #afaeae;
        font-family: Arial;
        display: flex;
        border: 1px solid ${palette.border};
        width: 100%;
        padding: 6px;
        border-radius: 5px;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        span {
          font-size: 14px;
        }
        svg {
          float: right;
        }
      }
      #img-upload {
        display: none;
      }
    }
  }
`;

export default MeetCreateModal;
