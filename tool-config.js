export const tool = {
  "id": "E025",
  "title": "무부하 전압분배 계산기",
  "inputs_text": "입력전압 V_in [V], 상단 R₁ [Ω], 하단 R₂ [Ω]",
  "formula": "V_out = V_in R₂ / (R₁ + R₂)",
  "output_text": "하단 저항 양단 전압 V_out [V]",
  "assumptions": "R₁,R₂>0. 두 저항 직렬·출력 무부하·이상 전원을 가정한다. ADC 입력 등 부하가 유의하면 이 단순식을 그대로 사용하지 않는다.",
  "purpose": "저항 전압분배 계산 / ADC 센서 입력 초기 검산",
  "sources": [
    {
      "label": "OpenStax · Resistors in Series and Parallel (직렬 저항·옴의 법칙에서 정리)",
      "url": "https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel"
    }
  ],
  "slug": "eng-voltage-divider",
  "category": "전기",
  "result_label": "무부하 출력전압 V_out",
  "result_dimension": "voltage",
  "fields": [
    {
      "key": "vin",
      "label": "입력전압 V_in",
      "dimension": "voltage",
      "example": 12,
      "constraint": "signed",
      "display_unit": "V",
      "display_value": "12"
    },
    {
      "key": "r1",
      "label": "상단 저항 R₁",
      "dimension": "resistance",
      "example": 1000,
      "constraint": "positive",
      "display_unit": "ohm",
      "display_value": "1000"
    },
    {
      "key": "r2",
      "label": "하단 저항 R₂",
      "dimension": "resistance",
      "example": 2000,
      "constraint": "positive",
      "display_unit": "ohm",
      "display_value": "2000"
    }
  ],
  "site": "https://nanalab.kr/eng-voltage-divider/",
  "repository": "https://github.com/NaNaCompany/eng-voltage-divider",
  "condition": "",
  "output_unit": "V"
};
