export declare namespace mobizon {
  /**
   * This method is responsible for set the settings.
   * */
  function setConfig(data: Config): void;

  /**
   * Getting of balance information.
   * */
  function getBalance(): Promise<Balance>;

  /**
   * Sending of a single message.
   * */
  function  sendSms(data: PayloadSendSMS): Promise<SendSMS>;
  /**
   * Getting of SMS message delivery status report.
   * */
  function  getSms(data: PayloadGetSMS): Promise<GetSMS>;
  
  /**
   * Getting of the list of SMS messages.
   * */
  function  listSms(data: PayloadListSMS): Promise<ListSMS>;

  /** StatusSMS */
    type StatusSMS = 
    'DELIVRD' | 
    'NEW'     | 
    'ENQUEUD' | 
    'ACCEPTD' | 
    'UNDELIV' | 
    'REJECTD' | 
    'PDLIVRD' | 
    'EXPIRED' | 
    'DELETED'

  /** Config */
  export interface Config {
    apiServer: string
    apiKey: string
    /** @default 'json' */
    format: 'json' | 'xml'
    /** @default 'v1' */
    apiVersion?: 'v1'
  }

  /** Pagination */
  export interface Pagination {
    pagination: {
      currentPage: string,
      pageSize: string,
    }
  }

  /** DataBalance */
  export interface DataBalance {
    balance: string,
    /** @default 'BRL' */
    currency: 'BRL'
  }
  
  /** DataSendSMS */
  export interface DataSendSMS {
    campaignId: string,
    messageId: string,
    status: number
  }

  /** PayloadGetSMS */
  export interface PayloadGetSMS {
    ids: string[]
  }

  /** Response */
  export interface Response {
    code: number, 
    message?: string 
  }

  /** Balance */
  export interface Balance extends Response {
    data: DataBalance, 
  }

  /** PayloadSendSMS */
  export interface PayloadSendSMS {
    recipient: string,
    from: string,
    text: string
  }

  /** SendSMS */
  export interface SendSMS extends Response {
    data: DataSendSMS,
  }

  /** DataGetSMS */
  export interface DataGetSMS {
    id: string,
    status: StatusSMS,
    segNum: string,
    startSendTs: string,
    statusUpdateTs: string
  }

  /** GetSMS */
  export interface GetSMS extends Response {
    data: DataGetSMS[],
  }

  /** PayloadListSMS */
  export interface PayloadListSMS extends Pagination {
    criteria?: {
      from?: string
    },
    sort?: {
      campaignId?: 'ASC' | 'DESC',
    },
  }

  /** DataListSMS */
  export interface DataListSMS {
    contentProviderName?: string | unknown | undefined,
    partnerId: string,
    userId: string,
    usedStopListWords?: string | unknown | undefined,
    countryA2?: string | unknown | undefined,
    operatorName?: string | unknown | undefined,
    id: string,
    campaignId: string,
    segNum: string,
    segUserBuy: string,
    status: StatusSMS,
    uuid: string,
    from: string,
    to: string,
    groups?: string,
    text: string,
    startSendTs: string,
    statusUpdateTs: string,
    contactCardId?: string | unknown | undefined,
    contentProviderId?: string | unknown | undefined,
    segPartnerSell?: string | unknown | undefined,
    segPartnerBuy?: string | unknown | undefined,
    segSystemSell?: string | unknown | undefined,
    segSystemBuy?: string | unknown | undefined,
    systemCurrency?: string | unknown | undefined,
    campaign: {
      commonStatus: string,
    }
  }

  /** ListSMS */
  export interface ListSMS extends Response {
    data: {
      items: DataListSMS[],
      totalItemCount: string
    }
  }
}