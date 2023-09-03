# kokua

A platform for dev resources

## Models and structure

### Resource

- id: string
- name: string
- subtitle : string
- type : enum
  - package
  - course
  - how_to_or_blog_post
- external_url: string (url)
- content string (md or html)
- tags relation
- contentType enum
  - video
  - audio
  - article
  - documentation
  - document

### tag

- id: string
- name: string
