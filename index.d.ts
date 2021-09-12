declare module "mobizon-node" {
  export const mobizon = {
    /**
     * This method is responsible for set the settings.
     * */
    setConfig: (data: Config): void => {},

    /**
     * Getting of balance information.
     * */
    getBalance: (): Promise<Balance> => {},

    /**
     * Sending of a single message.
     * */
    sendSms: (data: PayloadSendSMS): Promise<SendSMS> => {},

    /**
     * Getting of SMS message delivery status report.
     * */
    getSms: (data: PayloadGetSMS): Promise<GetSMS> => {},

    /**
     * Getting of the list of SMS messages.
     * */
    listSms: (data: PayloadListSMS): Promise<ListSMS> => {},
  }

  interface Config {
    apiServer: string
    /** @default 'v1' */
    apiKey: 'v1'
    /** @default 'json' */
    format: 'json' | 'xml'
  }

  interface Pagination {
    pagination: {
      currentPage: string,
      pageSize: string,
    }
  }

  interface DataBalance {
    balance: string,
    /** @default 'BRL' */
    currency: 'BRL'
  }

  interface DataSendSMS {
    campaignId: string,
    messageId: string,
    status: number
  }

  interface PayloadGetSMS {
    ids: string[]
  }

  interface Response {
    code: number, 
    message?: string 
  }

  interface Balance extends Response {
    data: DataBalance, 
  }

  interface PayloadSendSMS {
    recipient: string,
    from: string,
    text: string
  }

  interface SendSMS extends Response {
    data: DataSendSMS,
  }

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

  interface DataGetSMS {
    id: string,
    status: StatusSMS,
    segNum: string,
    startSendTs: string,
    statusUpdateTs: string
  }

  interface GetSMS extends Response {
    data: DataGetSMS[],
  }

  interface PayloadListSMS extends Pagination {
    criteria?: {
      from?: string
    },
    sort?: {
      campaignId?: 'ASC' | 'DESC',
    },
  }

  interface DataListSMS {
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
      counters: {
        campaignId: string,
        updateTs: string,
        totalNewSegNum: string,
        totalEnqueudSegNum: string,
        totalAcceptdSegNum: string,
        totalDelivrdSegNum: string,
        totalRejectdSegNum: string,
        totalExpiredSegNum: string,
        totalUndelivSegNum: string,
        totalDeletedSegNum: string,
        totalUnknownSegNum: string,
        totalPdlivrdSegNum: string,
        totalSegNum: string,
        totalNewMsgNum: string,
        totalEnqueudMsgNum: string,
        totalAcceptdMsgNum: string,
        totalDelivrdMsgNum: string,
        totalRejectdMsgNum: string,
        totalExpiredMsgNum: string,
        totalUndelivMsgNum: string,
        totalDeletedMsgNum: string,
        totalUnknownMsgNum: string,
        totalPdlivrdMsgNum: string,
        totalMsgNum: string,
        totalCost: string,
        totalPartnerCost: string,
        totalNewMsgCost: string,
        totalEnqueudMsgCost: string,
        totalAcceptdMsgCost: string,
        totalDelivrdMsgCost: string,
        totalRejectdMsgCost: string,
        totalExpiredMsgCost: string,
        totalUndelivMsgCost: string,
        totalDeletedMsgCost: string,
        totalUnknownMsgCost: string,
        totalPdlivrdMsgCost: string,
        partnerCurrency: string,
        userCurrency: string,
        recipientsRejected: string
      },
      createTs: string,
      creationWay: string,
      currency?: string | unknown | undefined,
      deferredToTs?: string | unknown | undefined,
      endSendTs: string,
      expirationTs: string,
      extra: {
        validity: string,
        mclass: string,
        isTestAlphanameUsed: true,
        coding: string,
        charset: string,
        trackShortLinkRecipients: 0
      },
      from: string,
      globalComment?: string | unknown | undefined,
      globalModStatus: string,
      groups?: string | unknown | undefined,
      groupsList: any[],
      highlightedText?: string | unknown | undefined,
      id: string,
      isTemplateComment?: string | unknown | undefined,
      moderationStatus: string,
      msgType: string,
      name?: string | unknown | undefined,
      partnerId: string,
      partnerModStatus: string,
      rateLimit?: string | unknown | undefined,
      ratePeriod?: string | unknown | undefined,
      recipientsSource?: string | unknown | undefined,
      sendStatus: string,
      startSendTs: string,
      text: string,
      type: string,
      usedStopListWords?: string | unknown | undefined,
      userId: string
    }
  }

  interface ListSMS extends Response {
    data: {
      items: DataListSMS[],
      totalItemCount: string
    }
  }
}