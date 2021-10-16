def get_dist(boxes, labels, w, h, число=10):
  person, dog = 1, 18
  boxes = boxes.tolist()[:число]
  labels = labels.tolist()[:число]
  person_cs, dog_cs = [], []
  get_center = lambda box: ((box[0] + box[2]) / 2, (box[1] + box[3]) / 2)
  for i in range(len(boxes)):
    if labels[i] == person: 
      person_cs.append(get_center(boxes[i]))
    if labels[i] == dog: 
      dog_cs.append(get_center(boxes[i]))
  dist = [[0 for j in range(len(dog_cs))] for i in range(len(person_cs))]
  print (dog_cs, person_cs)
  for i in range(len(person_cs)):
    for j in range(len(dog_cs)):
      dist[i][j] = ((person_cs[i][0] - dog_cs[j][0]) ** 2 + (person_cs[i][1] -
                                                  dog_cs[j][1]) ** 2) ** 0.5
  return np.min(dist) / (w ** 2 + h ** 2) ** 0.5 #!!!!!по теореме Пифагора
