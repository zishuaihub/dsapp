
export class DataType {

      is_default: number;
      agent_id: number;
      region_name: string;
      stime: number;
      ad: [
        {
          id: number,
          layout_type: number,
          img: string,
          link_url: string,
          link_type: number,
          life: string
        }
        ];
     category: [
        {

        }];
      supplier: [
        {
          id: number,
          name: string,
          cat_id: number,
          cat_name: string,
          sub_id: number,
          sub_name: string,
          logo: string,
          address: string,
          score: number,
          img: [string],
          custom: string,
          discount: number,
          idiscount: string,
          mobile: string,
          circle: string,
          distance: string,
          custome: string,
          remark: string,
          description: string,
          content: [string],
          lat: string,
          lng: string
        }]

}
