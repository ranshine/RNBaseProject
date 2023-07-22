import axios, { AxiosInstance } from 'axios'

class ApiClient {
  private static instance: ApiClient
  readonly axiosClient: AxiosInstance

  private constructor() {
    this.axiosClient = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  public static getInstance(): ApiClient {
    if (ApiClient.instance == null) {
      ApiClient.instance = new ApiClient()
    }
    return ApiClient.instance
  }

  public refreshToken(): void {
    // add refresh token logic
  }

  public async callApi(): Promise<any> {
    try {
      const res = await this.axiosClient.get('/albums1')
      if (res.status === 401) {
        this.refreshToken()
        return res.data
      }
      return res.data
    } catch (error: any) {
      console.log(error.response)
      return error.response
    }
  }
}
export default ApiClient
