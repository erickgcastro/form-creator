import * as R from 'react-share';
import { CardContainer, FormCard } from 'src/components/Form';
import { ShareContainer, LinkBox, BtnCopyLink, CopyMessage, BtnClose } from './styles';
import useShareForm from './useShareForm';

type TypeShareForm = {
  urlParam?: string;
  closeCard?: (s?: any) => any;
};

const ShareForm = ({ urlParam, closeCard }: TypeShareForm) => {
  const { url, copyToClipboard, showMessage } = useShareForm(urlParam);

  return (
    <CardContainer>
      <FormCard style={{ marginBottom: 0 }}>
        {closeCard && (
          <BtnClose onClick={() => closeCard(false)}>
            <span className='material-icons' translate='no'>
              close
            </span>
          </BtnClose>
        )}

        <ShareContainer>
          <R.FacebookShareButton url={url}>
            <R.FacebookIcon size={45} style={{ borderRadius: '5px' }} />
          </R.FacebookShareButton>
          <R.WhatsappShareButton url={url}>
            <R.WhatsappIcon size={45} style={{ borderRadius: '5px' }} />
          </R.WhatsappShareButton>
          <R.TelegramShareButton url={url}>
            <R.TelegramIcon size={45} style={{ borderRadius: '5px' }} />
          </R.TelegramShareButton>
          <R.TwitterShareButton url={url}>
            <R.TwitterIcon size={45} style={{ borderRadius: '5px' }} />
          </R.TwitterShareButton>
          <R.RedditShareButton url={url}>
            <R.RedditIcon size={45} style={{ borderRadius: '5px' }} />
          </R.RedditShareButton>
          <R.EmailShareButton url={url}>
            <R.EmailIcon size={45} style={{ borderRadius: '5px' }} />
          </R.EmailShareButton>
          <R.LinkedinShareButton url={url}>
            <R.LinkedinIcon size={45} style={{ borderRadius: '5px' }} />
          </R.LinkedinShareButton>
        </ShareContainer>

        <LinkBox>
          <div
            className='link'
            style={{ fontSize: '14px', marginLeft: '10px' }}
            translate='no'
          >
            {url}
          </div>
          <BtnCopyLink onClick={copyToClipboard}>
            Copy url
            {showMessage && <CopyMessage>Copied</CopyMessage>}
          </BtnCopyLink>
        </LinkBox>
      </FormCard>
    </CardContainer>
  );
};

export default ShareForm;
